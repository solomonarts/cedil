// pages/AboutUsPage.jsx
import React, { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import LeadershipContent from "../Sections/LeadershipContent";
import AboutUsContent from "../Sections/AboutusContent";
import { Layout, Menu } from "antd";

const { Sider, Content } = Layout;

const AboutUsPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("About Us");
  const [selectedSubMenu, setSelectedSubMenu] = useState("");

  const menus = [
    { title: "About Us", submenus: [] },
    {
      title: "Leadership",
      submenus: [
        "Ceo and President",
        "International Advisory Board",
        "Innovation and Research Fellows",
        // "Issue-Based Working Groups",
        "Careers",
      ],
    },
  ];

  const handleMenuClick = (menu) => {
    console.log(menu.key);
    setActiveMenu(menu.key);
    setMenuOpen(false);
  };

  const handleSubMenuClick = (submenu) => {
    setSelectedSubMenu(submenu.key);
    console.log(submenu.key);
  };

  return (
    <div class="flex flex-col md:flex-row px-0 md:px-10">
      {/* <!-- Left Column: 20% width --> */}
      <div class="w-full md:w-1/5 md:min-w-1/5 hidden xl:grid">
        {/* Sidebar (Left Menu) */}

        <Sider width={300} className="mx-auto mt-10 site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={["about"]}
            defaultOpenKeys={["leadership"]}
            onClick={handleMenuClick}
            style={{ height: "100%", borderRight: 0 }}
          >
            {/* <Menu.Item key="about">About Us</Menu.Item> */}
            {menus.map((menu, mindx) => {
              return (
                <>
                  {menu.submenus?.length === 0 && (
                    <Menu.Item
                      style={{
                        whiteSpace: "discard",
                        wordBreak: "break-word",
                        height: "auto",
                        textAlign: "left",
                      }}
                      key={menu.title}
                    >
                      {menu.title}
                    </Menu.Item>
                  )}

                  {menu.submenus?.length > 0 && (
                    <Menu.SubMenu key={menu.title} title={menu.title}>
                      <>
                        {menu.submenus.map((submenu, subIndex) => (
                          <Menu.Item
                            style={{
                              whiteSpace: "discard",
                              wordBreak: "break-word",
                              height: "auto",
                              textAlign: "left",
                            }}
                            key={submenu}
                            onClick={handleSubMenuClick}
                          >
                            {submenu}
                          </Menu.Item>
                        ))}
                      </>
                    </Menu.SubMenu>
                  )}
                </>
              );
            })}
          </Menu>
        </Sider>
      </div>

      {/* <!-- Right Column: 80% width --> */}
      <div class="w-full lg:w-4/5 md:min-w-[60vw] p-4 mx-auto">
        {/* Content Section (Right Content) */}
        <div className="flex-1 p-6 ml-0 bg-white md:ml-1/4 lg:ml-1/5">
          {/* Menu Toggle for Mobile */}
          <div className="flex justify-end mb-4 xl:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="z-50 p-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <MenuOutlined className="text-2xl" />
            </button>

            {menuOpen && (
              <div className="fixed z-40">
                <Sider
                  width={300}
                  className="mx-auto mt-10 site-layout-background"
                >
                  <Menu
                    mode="inline"
                    defaultSelectedKeys={["about"]}
                    defaultOpenKeys={["leadership"]}
                    onClick={handleMenuClick}
                    style={{ height: "100%", borderRight: 0 }}
                  >
                    {/* <Menu.Item key="about">About Us</Menu.Item> */}
                    {menus.map((menu, mindx) => {
                      return (
                        <>
                          {menu.submenus?.length === 0 && (
                            <Menu.Item
                              key={menu.title}
                              style={{
                                whiteSpace: "discard",
                                wordBreak: "break-word",
                                height: "auto",
                                textAlign: "left",
                              }}
                            >
                              {menu.title}
                            </Menu.Item>
                          )}

                          {menu.submenus?.length > 0 && (
                            <Menu.SubMenu key={menu.title} title={menu.title}>
                              <>
                                {menu.submenus.map((submenu, subIndex) => (
                                  <Menu.Item
                                    key={submenu}
                                    onClick={handleSubMenuClick}
                                    style={{
                                      whiteSpace: "discard",
                                      wordBreak: "break-word",
                                      height: "auto",
                                      textAlign: "left",
                                    }}
                                  >
                                    {submenu}
                                  </Menu.Item>
                                ))}
                              </>
                            </Menu.SubMenu>
                          )}
                        </>
                      );
                    })}
                  </Menu>
                </Sider>
              </div>
            )}
          </div>

          {/* Dynamic Content */}
          {activeMenu === "About Us" ? (
            <AboutUsContent />
          ) : (
            <LeadershipContent selectedSubMenu={selectedSubMenu} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
