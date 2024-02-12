import {
    VictoryBar,
    VictoryPie,
    VictorySharedEvents,
    VictoryLabel,
  } from "victory";

function VictoryCard(){
    return (
        <VictorySharedEvents
              events={[
                {
                  childName: ["pie", "bar"],
                  target: "data",
                  eventHandlers: {
                    onMouseOver: () => {
                      return [
                        {
                          childName: ["pie", "bar"],
                          mutation: (props) => {
                            return {
                              style: Object.assign({}, props.style, {
                                fill: "tomato",
                              }),
                            };
                          },
                        },
                      ];
                    },
                    onMouseOut: () => {
                      return [
                        {
                          childName: ["pie", "bar"],
                          mutation: () => {
                            return null;
                          },
                        },
                      ];
                    },
                  },
                },
              ]}
            >
              <g transform={"translate(150, 50)"}>
                <VictoryBar
                  name="bar"
                  width={300}
                  standalone={false}
                  style={{
                    data: { width: 20 },
                    labels: { fontSize: 15 },
                  }}
                  data={[
                    { x: "2019", y: 2 },
                    { x: "2020", y: 3 },
                    { x: "2021", y: 5 },
                    { x: "2022", y: 4 },
                  ]}
                  labels={["2019", "2020", "2021", "2022"]}
                  labelComponent={<VictoryLabel y={290} />}
                />
              </g>
              <g transform={"translate(0, -75)"}>
                <VictoryPie
                  name="pie"
                  width={250}
                  standalone={false}
                  style={{ labels: { fontSize: 15, padding: 10 } }}
                  data={[
                    { x: "2019", y: 1 },
                    { x: "2020", y: 4 },
                    { x: "2021", y: 5 },
                    { x: "2022", y: 7 },
                  ]}
                />
              </g>
            </VictorySharedEvents>
    )
}
export default VictoryCard;