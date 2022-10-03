import Main from "main";
import Layout from "layout";
import SearchBar from "components/search";
import WelcomePage from "components/landing";

/**
 * Hello World
 */
const Home = ({ iconsArray }: IconPageProps) => {
  return (
    <Layout>
      <WelcomePage />
      <SearchBar />
      <Main iconsArray={iconsArray.slice(0, 100)} />
    </Layout>
  );
};

export default Home;

// Backend Implemention
import path from "path";
import { promises as fs } from "fs";
import { IconPageProps } from "typings/pages";
import toCapitalize from "utils/toCapitalize";

const dir = `/ionic/solid`;
export const getServerSideProps = async () => {
  const rootPath = path.join(process.cwd(), "/public");
  const icons = await fs.readdir(path.join(rootPath, dir));
  const data = icons.map((icon) => {
    const fileName = path.basename(icon, path.extname(icon));
    return {
      id: 0,
      name: fileName,
      capitalize: toCapitalize(fileName),
      source: `${dir}/${icon}`,
    };
  });

  return {
    props: {
      iconsArray: data,
    },
  };
};
// // options is optional
// glob("**/*.svg", {}, function (er, files) {
//   // files is an array of filenames.
//   // If the `nonull` option is set, and nothing
//   // was found, then files is ["**/*.js"]
//   // er is an error object or null.
//   console.log(files);
// });
