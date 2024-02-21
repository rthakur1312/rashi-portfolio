import { homepages } from "@/data/homepages";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Demo() {
  return (
    <div className="home-demo-area bg-black " id="demo">
      <div className="container">
        <div className="section-title-wrap text-center mb-70">
          <h1 className="main-title">Portfolio</h1>
          <Image
            width={372}
            height={68}
            className="bg-shape"
            src="/assets/img/preview.png"
            alt="shape"
          />
          {/* <h2 className="section-title">03 Awesome Light & Dark Demo</h2> */}
          <p className="section-pera">
          Welcome to my portfolio! Here, you'll find a curated collection 
          of my work as a frontend developer. With a passion for crafting engaging 
          and user-centric web experiences, I specialize in turning ideas into 
          intuitive, visually appealing interfaces. Through a combination of 
          creativity, technical expertise, and attention to detail, I strive to 
          create seamless digital solutions that delight users and elevate brands. 
          Join me on a journey through my projects, where innovation meets 
          functionality, and let's build the web together.
          </p>
        </div>

        <div className="row justify-content-center">
          {homepages.map((elm, i) => (
            <div key={i} className="col-lg-4 col-md-6 col-sm-6">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                className="demo-link"
                href={elm.href}
              >
                <span>
                  <Image width={520} height={540} src={elm.imgSrc} alt="demo" />
                </span>
                <span className="demo-title text-decoration-underline">{elm.title}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
