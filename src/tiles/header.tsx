"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "../components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import EAYG from "../../public/assets/header/eayg.jpg";

export function Header({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Миний тухай">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/profession">Мэргэжил</HoveredLink>
            <HoveredLink href="/school">Сургууль</HoveredLink>
            <HoveredLink href="/internship">Дадлага</HoveredLink>
            <HoveredLink href="/work-experience">Ажлын туршлага</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Бүтээл">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Ulaanbaatar2023 EAYG"
              href="https://ulaanbaatar2023.org/"
              src={EAYG}
              description="Prepare for tech interviews like never before."
              blank="_blank"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Холбоо барих">
          {/* <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div> */}
        </MenuItem>
      </Menu>
    </div>
  );
}
