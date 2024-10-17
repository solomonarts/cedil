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
        "Senior Leadership",
        "International Advisory Board",
        "CEDIL Global Innovation and Research Fellows",
        "In-country and Continental Working Groups",
        "Careers and Fellowships",
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

        <Sider width={300} className="site-layout-background mx-auto mt-10">
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
        <div className="flex-1 ml-0 md:ml-1/4 lg:ml-1/5 bg-white p-6">
          {/* Menu Toggle for Mobile */}
          <div className="flex xl:hidden mb-4 justify-end">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 z-50"
            >
              <MenuOutlined className="text-2xl" />
            </button>

            {menuOpen && (
              <div className="fixed z-40">
                <Sider
                  width={300}
                  className="site-layout-background mx-auto mt-10"
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
