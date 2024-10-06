// components/InnovationsSection.js
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@nextui-org/react";
import { RiLightbulbLine } from "react-icons/ri"; // Import React Icon
// import '../styles/custom.scss';
import { Typography } from "antd";

const { Text } = Typography;

const InnovationsSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <Text className="mb-8">Our Innovations</Text>
        <div className="grid md:flex justify-center space-x-6">
          <Card className="w-[300px]">
            <CardHeader className="flex flex-col items-center">
              <RiLightbulbLine size={50} className="mb-4 text-blue-500" />
              <Text size={24}>AI & Machine Learning</Text>
            </CardHeader>
            <CardBody>
              <Text>
                Explore groundbreaking AI solutions driving the future of
                automation and decision-making.
              </Text>
            </CardBody>
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <Button auto ghost color="primary">
                Learn More
              </Button>
            </CardFooter>
          </Card>

          <Card className="w-[300px]">
            <CardHeader className="flex flex-col items-center">
              <RiLightbulbLine size={50} className="mb-4 text-green-500" />
              <Text size={24}>Biotechnology</Text>
            </CardHeader>
            <CardBody>
              <Text>
                Advancing life sciences with cutting-edge biotechnology
                innovations.
              </Text>
            </CardBody>
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <Button auto ghost color="success">
                Learn More
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InnovationsSection;
