// hooks
import { useState, useContext } from "react";

// context
import { SelectedMenu } from "../context/SelectedMenu";

// css
import classes from "./MorePage.module.css";

// components
import Header from "../components/Layout/Header";
import SelectButton from "../components/Common/SelectButton";

//images
import MoreDescription from "../assets/descriptions/more_description.png";
import MoreButton1 from "../assets/moreButtons/more_button1.png";
import MoreButton2 from "../assets/moreButtons/more_button2.png";
import MoreButton3 from "../assets/moreButtons/more_button3.png";
import MoreButton4 from "../assets/moreButtons/more_button4.png";
import MoreButton5 from "../assets/moreButtons/more_button5.png";

const MorePage = () => {
  const selectedMenu = useContext(SelectedMenu);
  const menus = selectedMenu.menus;

  const [contraint, setContraint] = useState("");

  const onClickButtonHandler = (e, id) => {
    switch (id) {
      case "1":
        setContraint("1");
        break;
      case "2":
        setContraint("2");
        break;
      case "3":
        setContraint("3");
        break;
      case "4":
        setContraint("4");
        break;
      case "5":
        setContraint("5");
        break;
      default:
        break;
    }
    sendMessage(e);
  };

  const sendMessage = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    const apiUrl = "https://api.openai.com/v1/chat/completions";
    const apiKey = "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";
    console.log(menus)

    const requestBody = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "I can explain about your identity.",
        },
        {
          role: "user",
          content:

            menus + " 이 메뉴들 중에서 다음 조건에 해당하는 메뉴 하나만 추천해줘: " + "맛 있는거"
            // contraint,
        },
      ],
    };

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(requestBody),
      });

      const responseData = await response.json();
      console.log(
        "API response data:",
        responseData.choices[0].message.content
      );
      setResponseText(responseData.choices[0].message.content);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes["page-container"]}>
      <Header />
      <img src={MoreDescription} alt="more-description" />

      <div className={classes["buttons"]}>
        <button
          className={classes["more-btn"]}
          id="1"
          onClick={onClickButtonHandler}
        >
          <img src={MoreButton1} alt="more-button-1" />
        </button>
        <button
          className={classes["more-btn"]}
          id="2"
          onClick={onClickButtonHandler}
        >
          <img src={MoreButton2} alt="more-button-2" />
        </button>
        <button className={classes["more-btn"]} id="3">
          <img src={MoreButton3} alt="more-button-3" />
        </button>
        <button className={classes["more-btn"]} id="4">
          <img src={MoreButton4} alt="more-button-4" />
        </button>
        <button className={classes["more-btn"]} id="5">
          <img src={MoreButton5} alt="more-button-5" />
        </button>
      </div>
      <SelectButton text={"선택완료"} />
    </div>
  );
};

export default MorePage;
