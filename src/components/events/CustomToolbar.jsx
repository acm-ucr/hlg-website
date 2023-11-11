import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import filters from "@/data/filters";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const CustomToolbar = (event) => {
  return (
    <div className="flex justify-center items-center w-full py-3 flex-col md:flex-row">
      <div className="md:w-1/3 flex gap-3 mb-2 md:mb-0 items-center">
        <AiOutlineArrowLeft
          onClick={() => {
            console.log("prev");
            event.onNavigate("PREV");
          }}
          className="hover:cursor-pointer"
        />
        <p className="m-0 font-bold text-3xl">
          {monthNames[event.date.getMonth()]}
        </p>
        <p className="m-0 font-bold text-3xl">{event.date.getFullYear()}</p>
        <AiOutlineArrowRight
          onClick={() => event.onNavigate("NEXT")}
          className="hover:cursor-pointer"
        />
      </div>
      <Row className="w-10/12 md:w-3/4 m-0 p-0 flex justify-center md:justify-end justify-items-center items-center">
        {filters.map((filter, index) => (
          <Col key={index} xs={9} sm={3} className="p-1">
            <p
              className={`${filter.color} whitespace-nowrap text-center text-sm md:text-base rounded-sm m-0`}
            >
              {filter.topic}
            </p>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CustomToolbar;