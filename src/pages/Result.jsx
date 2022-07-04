import { Card } from "antd";

const Result = () => {

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