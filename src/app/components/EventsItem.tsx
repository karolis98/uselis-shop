import React from "react";
import "./eventsItem.css";
import Image from "next/image";
import { EventItem } from "../data/types";

export default function EventsItem({ item }: { item: EventItem }) {
  return (
    <div className="row event-item">
      <div className="col-lg-6">
        <Image
          width={500}
          height={500}
          src={item.image}
          className="img-fluid"
          alt=""
        />
      </div>
      <div className="col-lg-6 pt-4 pt-lg-0 content">
        <h3>{item.title}</h3>
        <div className="price">
          <p></p>
        </div>
        <p className="fst-italic">{item.content}</p>
        <ul>
          {item.details.length > 0 &&
            item.details.map((detail, index) => (
              <li key={index}>
                <i className="bi bi-check2-circle"></i> {detail}
              </li>
            ))}
        </ul>
        <p>{item.summary}</p>
      </div>
    </div>
  );
}
