import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card >
      <Skeleton height='220px' width='300px'/>
        <CardBody>
          <SkeletonText />
        </CardBody>
     
    </Card>
  );
};

export default GameCardSkeleton;
