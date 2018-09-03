import React from "react";

const book ={
	title:"Ego is the enemy",
	author:"Ryan Holiday",
	publisher:{
		name:"Penguin"
	}
};

const {title} = book;
const {name:publisherName = "Self Published"} = book.publisher;

console.log(`${title} : ${publisherName}`);

const cofeeShopMenuItem = ["Vanilla Latte (Cold)","$2.00","$2.50","$2.75"];

const [menuItem,,mediumPrice] = cofeeShopMenuItem;

console.log(`${menuItem} - medium - price - ${mediumPrice}`);

export default () =>
	<div>This is destructuring playground !!</div>;