import { useRouter } from "next/router";
import React from "react";
import { categories } from "../utilities/categories";

export const Layout = (mainComponent: JSX.Element): JSX.Element => {
  const GetUrlSlug = () => {
    const router = useRouter();
    const pid = router.asPath;

    return pid;
  };

  return (
    <>
    <div className="flex">
      <div id="nav-left">
        <ul>
        {categories.map((category) => {
          if (GetUrlSlug() == `/${category.slug}`) {
            return (
              <li><a href={`/${category.slug}`} key={category.slug} className={category.color}>
                - {category.name}
              </a></li>
            );
          } else {
            return <li><a href={`/${category.slug}`} key={category.slug}>{category.name}</a></li>;
          }
        })}
        </ul>
      </div>
      <div id="main-page">
        {mainComponent}
      </div>
      <div id="nav-right"></div>
    </div>

    </>
  );
};
