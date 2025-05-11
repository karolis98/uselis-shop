import React from "react";
import Link from "next/link";
import "./menuItem.css";
import Image from "next/image";
import { MenuItemEntry } from "../data/types";

export default function MenuItem({ item }: { item: MenuItemEntry }) {
  return (
    <div className="col-lg-6 menu-item">
      <Image
        width={500}
        height={500}
        src={item.preview}
        className="menu-img"
        alt=""
      />
      <div className="menu-content">
        <Link href={`/menu/${item.id}`}>{item.name}</Link>
      </div>
      <div className="menu-ingredients">{item.ingredients}</div>
    </div>
  );
}
