import { useState, useEffect } from "react";
import SideDrawer from "../SideDrawer";
import axios from "axios";

const Table = () => {
  const [tableData,setTableData] = useState();
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const rp = await axios.post("https://localhost:8000/student_id/pastcompanies",{
          student_id:"434523"
        });
        setTableData(rp.data); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  },[]);

    const tableItems = [
      {
        avatar:
          "https://developer.microsoft.com/_devcom/images/logo-ms-social.png",
        name: "Microsoft",
        result: "Accepted",
        position: "Software engineer",
        campus:"Oncampus"
      },
      {
        avatar:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS0AAACnCAMAAABzYfrWAAAAh1BMVEX///8AAADq6uqNjY3u7u7m5uasrKzS0tI7Ozu0tLSoqKhCQkLy8vK8vLz8/Pzx8fGTk5Pg4OB6enptbW2hoaE0NDTHx8fY2Nh2dnZkZGROTk6BgYGwsLDKysqcnJzc3NwtLS1gYGAdHR2Hh4cnJycPDw9XV1dNTU1GRkYYGBgpKSkhISESEhKiYA2UAAAKMElEQVR4nO2b63qqsBKGjeCxgICKeMJTa7Xt/V/fJpMAM0lQu9Ze7fbZ8/4qEJLwZWYySWynwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAM879K97c78ERkK8FyPYZfXIV43/12N56CxVQIsU5+uxvPQDQaCjHvR7/dj2eg55VmNR38djeegu1BiGvs/3Y3noFg/CrEKvztbjwFu5Qj+6OEF47sD+LHbxzZH2RQJldfBUf2B4g28zKyZ7/djaegd+LI/ijZmSP7gwSzz5+N7H73adnlZWR/MGcPen+GUc1RPDGP5+zxH7ZgVFN4T0v8jci+GPf/hPHjLTAMwzAMwzDMD4PXiclg1/UDd7mobbXmKB/tRsX6dCrG22oRlwwU//iUfRL2T+kyLbJ7i8dJNo7T6XKaxptFywc7ebOWRsPleGGXW7StpKzFge99NU/3OewQLPXl7Bs9+zaLc9nC9QoNvYzay3WLC/mCuffw4X+42Yxy+K7RZtMfn857efExM3eMJuOy4Id8lvfHgPcObfWNgrB+jQfdJEtVZ2RN2/4mdkr7X2Rd1r8pDcWfQbPm9kH9IfLAX7z3F/6kG+ourr7Tzka+camu/M1LefnmWt4PZcHmQfdiqyX7ctBS+xe0jF/8Y7Vkw9rRu8d2teBbv7bVZQB6Hb7TUB9s16zyZBcEtZCNR5+mWoW0bPqClm7wb9XKcM+SVrU8cCMcqmZ/rZYyhNQqaKrVGRlqBbIAOk7wf0ytF4E3o9IWtQpwvAm5V5ZdfqclWy11qzALWmpFhloQMvDIpT+k1kQQtRK3WtAHYUwA0d+rpYQxW7TUKqMFUetAO93p7H5IrYHR8N6p1hz80Lwb/71aI3nPrMVWa0QF+DDV6vykWiib81xqwTfZfej9vVoQgYSxl2urNaGHnq+WRXpzW62gt0jsM61o4vt+8IdnXRBoN811MnMknUNH1JJMY9qR251wqQVhU3iO5iq1otBO6i7tBlSrtVlBp5fk7aTKGD+XOkMpltOKNakoqx5giwhcn2CQiPuFurOz9I/jcNlvWw841YK5dkjvEbUmppYdlfTUvkfRaiV7UdEYaQC5/nI26kvN9rCUWNblxN7urTBdHs6ubp8sqqzV7nRDJDNc8Z6OPbnESd0m5lRrLMz5zVBrK+KOCSRqYu5aDoJamzLqx8lkEsKCq1pgBbBUUhmjVwWA0h8yKBQEqhNZGMILURBEY1FEAekbvNdkepGvwGXOwnBXE8hqLyqQnByBSOFUC7oq6E8xiFqpQ61Ij3psRw1QKxZ7ZeA7eXXWj8Aiq8pkBHhHtVVfJ1O3Y1VZLsylbI+aa6E7ckRFIKjesD+Za4t9dQVmZse4FrUSx0hgtULhUEsbV0lufo7KdWpjPTQXdEIBm9bGKf1yimuuJpCreSza/1TVV87TzTbQgmiij2pGtG9PrLG9q6FyLSBvqEUFAbU2UTAZzFbWQ8WpkksM6W85lFr1JsSssdwJkRGmeR3ppXt96vsQx3Ry51fWpwku4kXVn6O7u1dBVrV0uCzg+aW59los0amWMm26+hkKgkstHUsVHuragIw9EeUdGz3YkJ5Ws8bOlI9r3w1p08GbNBk1w2zx/SveI+rdUSsmo6k7nNvlnGqpoZiSe6DW/DJ8vaFWJzkjvZpsAhpvlq+hvNROHSyv+7qbWK2gkXQrXhu110QUmaKvKxMlE3KGh/ueWpDC4PgBxe1y31NL9j5Iila1ylQRzf51UjSg+mK1CCMssmxQZVsnAW8o352Tb5bdl8nbjDYo+USXd9RSxovDOoRCe1q8oRa1RBzle+1qlS97llzGyqdFrWiwxOVk4FVpwVxEl0q6SOzxO1+VCcAykFS6flwtiNNf+M7B9GzFjbhFczmSQcQ31JL/aFPJpYPTA2pFWW44MJSSs1i3DFle9TkZ2XuTychH88HKzjQFUssXlvVgoH+f+A5sFNp74zfmRLqKuZudYny1Q16lPPfUCkZgVTnxRL/yvn55K6s8IxZ4Y3dc25/2xbcmdBUobkXqCKItg4Da5/jO2jaXTudPs9PuHbU6kf4lnXL922ptwezzLFLBui431x0+lKkWRBa550b/Q/PUjEhHLUGbLMnDw60ctS07hQ6RlR4kQ/YO8o2VD7Vbugdxd7tA27564ZZaXfjKIqhfqsvlqmcR+MhBd5POVPBR+m+dgdYGtcLiTAXpvkFo2dbpG7a1trR27dh0Anwe5xsJvIpdagv2hlrK6fW7VC2oISi9Xob3jboY0Lknxv6lD/KqaEMSCtUbx3EDbNGAL33g2xC3bP9xqjV3KOtQq8BBdWbuwQ2bSm6otccfSNXqKuc5QUiAi7BshezX4jy3cgl9nRFdlanTVYCuoa9Xrld8G2zRPAB0q6USCNfHU7WmuExo7m2NHrEtFSEr66BqQdIzK/UMqvbT0iHp1ph84Vxf6twFPHBF0yWVNtspRC7zBJVv4ejyXtdDcKkF08v9neZyYY8mmS11fO0YaqZoVwu+71qvh2k5OcDTiQ7c0umOHTPBvtJxVeFJOnZmJNdb4bSWcrKUosIuOVaXDGKDS60vh2k51Nrh+VpaM83mBs1gtqsF8eEzaurAp02yb/OR9lMlvnn8N6PGpU1IJKUKxrfCE2NAwQHkh+bEo3XCeTULO9WC8bY2zmy1cpLQBWZfZs133LGt2gfgQWMT0s+uw2rM5bOVdXIH76M0UuURbythnrer8GLOins1oBAQUJyDCOhIkmy1IN7Ys4elVmZMm8KYGOainuva1VJbx1UsUj/KaKqAnPKIH1o7gcrDkDTqFxqOT6UhUhFXFvSBB01Pc451kqWWuXlRYaqFTEdhvLdB6rWrRdbvejXXBNeDvFzjt+x9f2vHHV4SV/u3QlDBHsvVrwdnS0wETVAU8quRYOvJeejF8ask8quRaFdArk52wCAXyPHGXn1eAzGnibAZqiptLGH3IUDWfa0I2jbUE5fj1EbJtQ+rtwK9p2QfPy0+iB2qcwv97WAkOvyAdNY5o5emKfj5sfwjn55VM/a/Rvam5XOYfc5lucOq3hgk5q7nozRMdtvZsDHEcZ7CKnBVvltentL0rKrK4XUVaI7nw1BaFYi3rzxzQRziLNynNgN9lLScjcLR6SLEQZ24rewdF9Dk1RskyTZc6/5i0Q/hbhfm2KIbPgTlOJ8WA4e3tv7ajTrs4jRvHs2Laqyn6IWODssKlSxWhw5i1as6XY1CJN7Qwk+GXvc/uY5QwyIvtR6k5GCpIdjg/UrxEjdTfw91dOrwromPaT+ljfwWrDcmSTgr4niWoaVvgF6gjeqFaJTNvDTu635Hg1FWj1gU4SaioPUYIunH08N5mRfbqL5TrJ1fFCXhuCjiohjtjB2cYFvE63U8XvA/iDIMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAM8//FfwDX+4A1Yz3XSwAAAABJRU5ErkJggg==",
        name: "DE Shaw",
        result: "Rejected",
        position: "Product designer",
        campus:"Oncampus"
      },
      {
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Adobe_Systems_logo_and_wordmark.svg/220px-Adobe_Systems_logo_and_wordmark.svg.png",
        name: "Adobe",
        result: "Rejected",
        position: "Front-end developer",
        campus:"Oncampus"
      },
      {
        avatar:
          "https://pbs.twimg.com/profile_images/1267713887165485061/WUR4QXtd_400x400.jpg",
        name: "Flipkart",
        result: "Accepted",
        position: "Laravel engineer",
        campus:"Oncampus"
      },
      {
        avatar:
          "https://speedmedia.jfrog.com/08612fe1-9391-4cf3-ac1a-6dd49c36b276/https://media.jfrog.com/wp-content/uploads/2017/11/06025750/Atlassian-Logo.jpg",
        name: "Atlassian",
        result: "Accepted",
        position: "Open source manager",
        campus:"Oncampus"
      },
    ];

    return (
      <>
      <SideDrawer/>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="items-start justify-between md:flex">
                <div className="max-w-lg">
                    <h3 className="text-gray-800 text-xl font-bold sm:text-2xl mt-9">
                        My Applications 
                    </h3>
                    <p className="text-gray-600 mt-2">
                        Previous Company record 
                    </p>
                </div>
            </div>
            <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                        <tr>
                            <th className="py-3 px-6">Company Name</th>
                            <th className="py-3 px-6">Role</th>
                            <th className="py-3 px-6">Campus</th>
                            <th className="py-3 px-6">Status</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {
                            tableItems.map((item, idx) => (
                                <tr key={idx} className="bg-[#F6F8FE]">
                                    <td className=" flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                                        <img src={item.avatar} className="w-10 h-10 rounded-full" />
                                        <div>
                                            <span className="block text-gray-700 text-sm font-medium">{item.name}</span>
                                            {/* <span className="block text-gray-700 text-xs">{item.email}</span> */}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.position}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.campus}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.result}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
      </div>
      </>
    )
}

// export default Navbar
export default Table;