import React from "react";
import { IState as Props } from "../App";

interface IProps {
  people: Props["people"];
}

const ListAll = ({ people }: IProps) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li className="List">
          <div className="List-header">
            <img className="List-img" src={person.img} width={50} height={50} />
            <h2>{person.name}</h2>
          </div>
          <p>{person.age} years old</p>
          <p className="List-note">{person.note}</p>
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};

export default ListAll;
