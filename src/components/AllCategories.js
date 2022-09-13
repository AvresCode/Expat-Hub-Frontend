import {
  AllCategoriesContainer,
  OneCategoryContainer,
  Button,
} from "../styled";

import { ImageCatContainer } from "../styled/Image";

export const AllCategories = () => {
  return (
    <AllCategoriesContainer>
      <OneCategoryContainer>
        {" "}
        <div>
          {" "}
          <ImageCatContainer src="/food.jpg" alt="" />
        </div>
        <div>
          <Button>Join events for Foodies!</Button>
        </div>
      </OneCategoryContainer>{" "}
      <OneCategoryContainer>
        {" "}
        <div>
          {" "}
          <ImageCatContainer src="/play.jpg" alt="" />
        </div>
        <div>Play games and socialize!</div>
      </OneCategoryContainer>
      <OneCategoryContainer>
        {" "}
        <div>
          {" "}
          <ImageCatContainer src="/tour.jpg" alt="" />
        </div>
        <div>Discover new places!</div>
      </OneCategoryContainer>
      <OneCategoryContainer>
        {" "}
        <div>
          {" "}
          <ImageCatContainer src="/entertainment.jpg" alt="" />
        </div>
        <div>Have fun and make friends!</div>
      </OneCategoryContainer>
    </AllCategoriesContainer>
  );
};
