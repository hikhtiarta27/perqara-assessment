import { Movie } from "~/types/movie";

const wonderWoman: Movie = {
  rating: 7.0,
  title: "Wonder Woman",
  year: 2020,
  path: "/img/wonder-woman.png",
  genre: "Super Power",
  desc: `Senior year of high school takes center stage as Lara Jean returns from a family trip to Korea and considers her college plans — with and without Peter.`,
};

const spaceSweeper: Movie = {
  rating: 7.3,
  title: "Space Sweeper",
  year: 2021,
  path: "/img/space-sweeper.png",
  genre: "Sci-Fi",
  desc: `When the crew of a space junk collector ship called The Victory
      discovers a humanoid robot named Dorothy that's known to be a weapon of
      mass destruction, they get involved in a risky business deal which puts
      their lives at stake.`,
};

const toAllTheBoy: Movie = {
  rating: 8.1,
  title: "To All the Boys: Always and Forever",
  year: 2021,
  path: "/img/to-all-the-boys.png",
  genre: "Drama",
  desc: `Senior year of high school takes center stage as Lara Jean returns from a family trip to Korea and considers her college plans — with and without Peter.`,
};

const belowZero: Movie = {
  rating: 6.4,
  title: "Below Zero",
  year: 2021,
  path: "/img/below-zero.png",
  desc: "Lorem Ipsum",
  genre: "Lorem Ipsum",
};

const theLittleThings: Movie = {
  rating: 6.3,
  title: "The Little Things",
  year: 2021,
  path: "/img/little-thing.png",
  desc: "Lorem Ipsum",
  genre: "Lorem Ipsum",
};

const outsideTheWire: Movie = {
  rating: 6.5,
  title: "Outside the Wire",
  year: 2021,
  path: "/img/outside-the-wire.png",
  desc: "Lorem Ipsum",
  genre: "Lorem Ipsum",
};

const blackWaterAbyss: Movie = {
  rating: 5.1,
  title: "Black Water Abyss",
  year: 2020,
  path: "/img/black-water-abyss.png",
  desc: "Lorem Ipsum",
  genre: "Lorem Ipsum",
};

const breach: Movie = {
  rating: 4.6,
  title: "Breach",
  year: 2021,
  path: "/img/breach.png",
  desc: "Lorem Ipsum",
  genre: "Lorem Ipsum",
};

const soul: Movie = {
  rating: 8.3,
  title: "Soul",
  year: 2020,
  path: "/img/soul.png",
  desc: "Lorem Ipsum",
  genre: "Lorem Ipsum",
};

const fastAndFurious: Movie = {
  rating: 6.9,
  title: "Fast & Furious Presents: Hobbs & Shaw",
  year: 2019,
  path: "/img/fast-and-furious.png",
  desc: "Lorem Ipsum",
  genre: "Lorem Ipsum",
};

const theCrouds: Movie = {
  rating: 7.6,
  title: "The Croods: A New Age",
  year: 2020,
  path: "/img/the-croods.png",
  desc: "Lorem Ipsum",
  genre: "Lorem Ipsum",
};

const vanguard: Movie = {
  rating: 6.3,
  title: "Vanguard",
  year: 2020,
  path: "/img/vanguard.png",
  desc: "Lorem Ipsum",
  genre: "Lorem Ipsum",
};

const wolf100: Movie = {
  rating: 5.9,
  title: "100% Wolf",
  path: "/img/100-wolf.png",
  year: 2020,
  desc: "Lorem Ipsum",
  genre: "Lorem Ipsum",
};

const tenet: Movie = {
  rating: 7.3,
  title: "Tenet",
  path: "/img/tenet.png",
  year: 2020,
  desc: "Lorem Ipsum",
  genre: "Lorem Ipsum",
};

const theNewMutant: Movie = {
  rating: 7.0,
  title: "The New Mutant",
  path: "/img/the-new-mutant.png",
  year: 2020,
  desc: "Lorem Ipsum",
  genre: "Lorem Ipsum",
};

const theOldGuard: Movie = {
  rating: 7.0,
  title: "The Old Guard",
  path: "/img/the-old-guard.png",
  year: 2020,
  desc: "Lorem Ipsum",
  genre: "Lorem Ipsum",
};

const projectPower: Movie = {
  rating: 7.0,
  title: "Project Power",
  path: "/img/project-power.png",
  year: 2020,
  desc: "Lorem Ipsum",
  genre: "Lorem Ipsum",
};

export const getDiscoverMovies = (): Movie[] => {
  return [
    wonderWoman,
    belowZero,
    theLittleThings,
    outsideTheWire,
    blackWaterAbyss,
    breach,
    soul,
    fastAndFurious,
    theCrouds,
    vanguard,
  ];
};

export const getBannerMovies = (): Movie[] => {
  return [wonderWoman, spaceSweeper, toAllTheBoy];
};

export const getRecommendationMovies = (): Movie[] => {
  return [theNewMutant, soul, tenet, theOldGuard, projectPower];
};

export const getPaginationMovies = (): Movie[] => {
  return [...getDiscoverMovies(), tenet, wolf100];
};
