import { keyframes, styled } from "../../styles";

const skeletonAnimation = keyframes({
  "0%": {
    backgroundPosition: "-200px 0",
  },
  "100%": {
    backgroundPosition: "calc(200px + 100%) 0",
  },
});

export const ProductSkeletonContainer = styled("div", {
  margin: ' 0 auto',
  width: 1120,
  height: "67vh",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 24,

  div: {
    display: "grid",
    gridTemplateRows: "45% 15%",
    gap: '35%'
  }
});

export const SkeletonItem = styled("div", {
  animation: `${skeletonAnimation} 1300ms ease-in-out infinite`,
  backgroundColor: "$gray800",
  backgroundImage: "linear-gradient(90deg, $gray800, $gray700, $gray800)",
  backgroundSize: "200px 100%",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
  borderRadius: 8,
})