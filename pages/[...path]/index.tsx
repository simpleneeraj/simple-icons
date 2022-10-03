import Main from "main";
import Layout from "layout";
import SearchBar from "components/search";
import WelcomePage from "components/landing";

/**
 * Hello World
 */
const InfiniteIcons = ({ iconsArray }: IconPageProps) => {
  return (
    <Layout>
      <WelcomePage />
      <SearchBar />
      <Main iconsArray={iconsArray} />
    </Layout>
  );
};

export default InfiniteIcons;

// Backend Implemention
import path from "path";
import { promises as fs } from "fs";
import { IconPageProps } from "typings/pages";
import toCapitalize from "utils/toCapitalize";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

export const getServerSideProps: GetServerSideProps = async ({
  query,
}: GetServerSidePropsContext) => {
  const iconPath = query?.path;
  /* @ts-ignore */
  const dir = `/${iconPath[0]}/${iconPath[1]}`;
  console.log(iconPath);
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

// const empty = [];
// const isAll = query.icons?.includes("all");
// if (isAll) {
//   glob("**/*.svg", {}, function (er, files) {
//     // files is an array of filenames.
//     // If the `nonull` option is set, and nothing
//     // was found, then files is ["**/*.js"]
//     // er is an error object or null.
//     // console.log(files);
//     empty.push(files);
//   });
//   console.log(empty);
// }
// };

// getAllIcons();
