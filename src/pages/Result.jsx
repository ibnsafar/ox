import { Card } from "antd";
import { useEffect } from "react";

const Result = (props) => {

    console.log(JSON.parse(localStorage.getItem('items')))

    return (
        <div>
            <Card
                style={{
                    width: 600,
                    margin: "auto",
                    textAlign: "center",
                    marginTop: "10%"
                }}
                title="Result">


            </Card>
        </div>
    )

}
export default Result;