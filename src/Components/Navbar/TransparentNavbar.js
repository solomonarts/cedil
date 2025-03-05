// components/Navbar.js
import React from "react";
import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
// import { useRouter } from 'next/router';
// import './Navbar.css'; // For custom styles if needed
import { useLocation, useNavigate } from "react-router-dom";
import { logos, menu } from "../../Constants";

const TransparentNavbar = () => {
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Navbar
      // isBordered={false}
      shouldHideOnScroll
      className="bg-[#053744]"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <Link onClick={() => navigate("#home")}>
          <NavbarBrand>
            <img src={logos["cedilwhite.png"]} alt="Cedil Logo" />
          </NavbarBrand>
        </Link>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarItem>
          <Link
            className={`navbar-link ${
              location.pathname === "" || location.hash === "#home"
                ? "text-[#84c5c9]"
                : "text-white"
            }`}
            isActive={(location.pathname === "") | (location.hash === "#home")}
            onClick={() => navigate("/#home")}
            css={{
              "&:hover": { color: "#84c5c9" },
            }}
          >
            Home
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            className={`navbar-link ${
              location.hash === "#about-us" ? "text-[#84c5c9]" : "text-white"
            }`}
            isActive={location.hash === "#about-us"}
            onClick={() => navigate("/#about-us")}
            css={{
              "&:hover": { color: "#84c5c9" },
            }}
          >
            About Us
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            className={`navbar-link ${
              location.hash === "#our-programs"
                ? "text-[#84c5c9]"
                : "text-white"
            }`}
            isActive={location.hash === "#our-programs"}
            onClick={() => navigate("/#our-programs")}
            css={{
              "&:hover": { color: "#84c5c9" },
            }}
          >
            Our Programs
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            className={`navbar-link ${
              location.hash === "#how-we-work" ? "text-[#84c5c9]" : "text-white"
            }`}
            isActive={location.hash === "#how-we-work"}
            onClick={() => navigate("/#how-we-work")}
            css={{
              "&:hover": { color: "#84c5c9" },
            }}
          >
            How We Work
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            className={`navbar-link ${
              location.hash === "#our-impact" ? "text-[#84c5c9]" : "text-white"
            }`}
            isActive={location.hash === "#our-impact"}
            onClick={() => navigate("/#our-impact")}
            css={{
              "&:hover": { color: "#84c5c9" },
            }}
          >
            Our Impact
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            className={`navbar-link ${
              location.hash === "#theory" ? "text-[#84c5c9]" : "text-white"
            }`}
            isActive={location.hash === "#theory"}
            onClick={() => navigate("/#theory")}
            css={{
              "&:hover": { color: "#84c5c9" },
            }}
          >
            Theory
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            className={`navbar-link text-white`}
            isActive={location.hash === "news-page"}
            onClick={() => navigate("/news-page")}
            css={{
              "&:hover": { color: "#84c5c9" },
            }}
          >
            News
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            className={`navbar-link ${
              location.hash === "#contact-us" ? "text-[#84c5c9]" : "text-white"
            }`}
            isActive={location.hash === "#contact-us"}
            onClick={() => navigate("/#contact-us")}
            css={{
              "&:hover": { color: "#84c5c9" },
            }}
          >
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menu.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menu.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href={`${item.link}`}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default TransparentNavbar;
