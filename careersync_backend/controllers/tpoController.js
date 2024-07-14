const tpoUser = require('../model/tpoUser');
const config = require('../config/config.js');
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(config.google_client_id_tpo,config.google_clientSecret_tpo,config.google_redirect_uri_tpo);

module.exports.tpoLogin = async function(req, res) {
  console.log("sig IN");
  const { code } = req.body;
  try {
    const { tokens } = await client.getToken(code);
    client.setCredentials(tokens);

    const google_creds = {
        refreshToken: tokens.refresh_token,
        accessToken: tokens.access_token,
    };
    const userInfoResponse = await client.request({
        url: 'https://www.googleapis.com/oauth2/v1/userinfo',
        params: {
          access_token: tokens.access_token,
        },
      });
  
      const userInfo = userInfoResponse.data;
      // console.log("user details are here ",userInfo,userInfoResponse);
      const { email, name } = userInfo;

    // Here you can handle the user data (e.g., save to your database)
    const tpo_user = await tpoUser.findOne({email:email});
    // console.log(tpo_user);
    if(tpo_user.length==0){
        const saver = new tpoUser({
            email:email,
            name:name,
            token:tokens.id_token,
            gmail_fetch_creds:google_creds
        });
        console.log(saver);
        saver.save();
    }

    const userDetail = {
      id: tpo_user.id,
      email: tpo_user.email,
      name: tpo_user.name
  };

  const jwt_token_tpo = jwt.sign({ userDetail: userDetail }, config.passport_jwt);
  // console.log("jwt token signed",jwt_token_tpo , " jwt token userDetail",userDetail);

  const userDocument = await tpoUser.findById(tpo_user.id);
  if (userDocument) {
      userDocument.token = jwt_token_tpo;
      await userDocument.save();
  }
  
  res.cookie('jwtTpo', jwt_token_tpo, {
      httpOnly: false,
      sameSite: false,
      secure: true,
      session: false
  });
    res.status(200).json({ userDetail, token: jwt_token_tpo});
  } catch (error) {
    console.error("Error: ", error);
    res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports.checkLoginTpo = async function(req, res) {
  const token = req.params.token;
  if (token!="undefined") {
      try {
          console.log(token);
          const ret = jwt.verify(token, config.passport_jwt);
          console.log(ret);
          return res.status(200).json({ message: "Previous Signed IN" });
      } catch (err) {
          console.log("First login checker ", err);
          return res.status(401).json({ message: "Please login" });
      }
  } else {
      return res.status(401).json({ message: "Please login" });
  }
}

module.exports.tpologout= async function(req,res){
  const token = req.params.token;
  console.log("logged out successfully",token);

  const userDetails = jwt.decode(token, config.passport_jwt);
  console.log(userDetails);

  try {
      if(!userDetails.userDetail.id){
          return res.status(401).send({message: "Heya!"});
      }
      const userDocument = await tpoUser.findById(userDetails.userDetail.id);
      if (userDocument) {
          userDocument.token = "";
          await userDocument.save();
      }
  } catch (error) {
      console.error("Error occurred while updating user token:", error);
      return res.status(500).json({ message: "Error occurred while updating user token" });
  }
  res.clearCookie("jwtTpo");
  return res.status(200).json({message:"Logged out successfully"});
}