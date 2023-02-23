import { useEffect, useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible, secKey }) => {
  // const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="border border-black p-2 m-2">
      <h3 className="font-bold text-xl inline-block mr-3">{title}</h3>
      <button
        className="border border-black rounded-md p-1 w-[60px]"
        onClick={() => (isVisible ? setIsVisible("") : setIsVisible(secKey))}
      >
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <p>{description}</p>}
    </div>
  );
};

const InstaMart = () => {
  const [visibleSection, setVisibleSection] = useState("");

  return (
    <div>
      <h1 className="text-3xl p-2 m-2 font-bold">InstaMart</h1>
      <Section
        isVisible={visibleSection === "about"}
        setIsVisible={setVisibleSection}
        title={"About Instamart"}
        secKey="about"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus illum ipsam veritatis non rerum odit magnam dolor quo incidunt. Quia inventore distinctio repellendus laudantium vitae architecto provident possimus, laborum dolorem.
                    Non, voluptate modi esse e culpa quae dignissimos? Pariatur, sit aliquam fugiat nulla amet error? Magni!"
      />
      <Section
        isVisible={visibleSection === "team"}
        setIsVisible={setVisibleSection}
        secKey="team"
        title={"Team Instamart"}
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus illum ipsam veritatis non rerum odit magnam dolor quo incidunt. Quia inventore distinctio repellendus laudantium vitae architecto provident possimus, laborum dolorem.
                    Non, voluptate modi esse e culpa quae dignissimos? Pariatur, sit aliquam fugiat nulla amet error? Magni!"
      />
      <Section
        isVisible={visibleSection === "careers"}
        setIsVisible={setVisibleSection}
        secKey="careers"
        title={"Careers"}
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus illum ipsam veritatis non rerum odit magnam dolor quo incidunt. Quia inventore distinctio repellendus laudantium vitae architecto provident possimus, laborum dolorem.
                    Non, voluptate modi esse e culpa quae dignissimos? Pariatur, sit aliquam fugiat nulla amet error? Magni!"
      />
    </div>
  );
};

export default InstaMart;
