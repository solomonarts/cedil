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
      className="bg-[#2f4f2f]"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <Link onClick={() => navigate("#home")}>
          <NavbarBrand>
            <img src={logos["cediltrans.png"]} alt="Cedil Logo" />
          </NavbarBrand>
        </Link>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            className={`navbar-link ${
              location.pathname === "/" ? "text-[#9ed263]" : "text-white"
            }`}
            isActive={location.pathname === ""}
            onClick={() => navigate("/")}
            css={{
              "&:hover": { color: "#9ed263" },
            }}
          >
            Home
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            className={`navbar-link ${
              location.hash === "#about-us" ? "text-[#9ed263]" : "text-white"
            }`}
            isActive={location.hash === "#about-us"}
            onClick={() => navigate("#about-us")}
            css={{
              "&:hover": { color: "#9ed263" },
            }}
          >
            About Us
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            className={`navbar-link ${
              location.hash === "#our-programs"
                ? "text-[#9ed263]"
                : "text-white"
            }`}
            isActive={location.hash === "#our-programs"}
            onClick={() => navigate("#our-programs")}
            css={{
              "&:hover": { color: "#9ed263" },
            }}
          >
            Our Programs
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            className={`navbar-link ${
              location.hash === "#how-we-work" ? "text-[#9ed263]" : "text-white"
            }`}
            isActive={location.hash === "#how-we-work"}
            onClick={() => navigate("#how-we-work")}
            css={{
              "&:hover": { color: "#9ed263" },
            }}
          >
            How We Work
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            className={`navbar-link ${
              location.hash === "#our-impact" ? "text-[#9ed263]" : "text-white"
            }`}
            isActive={location.hash === "#our-impact"}
            onClick={() => navigate("#our-impact")}
            css={{
              "&:hover": { color: "#9ed263" },
            }}
          >
            Our Impact
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            className={`navbar-link ${
              location.hash === "#theory" ? "text-[#9ed263]" : "text-white"
            }`}
            isActive={location.hash === "#theory"}
            onClick={() => navigate("#theory")}
            css={{
              "&:hover": { color: "#9ed263" },
            }}
          >
            Theory
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            className={`navbar-link ${
              location.hash === "#contact-us" ? "text-[#9ed263]" : "text-white"
            }`}
            isActive={location.hash === "#contact-us"}
            onClick={() => navigate("#contact-us")}
            css={{
              "&:hover": { color: "#9ed263" },
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
