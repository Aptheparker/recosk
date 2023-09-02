// hooks
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

// context
import { SelectedMenu } from '../context/SelectedMenu';

// css
import classes from './MorePage.module.css';

// components
import Header from '../components/Layout/Header';
import SelectButton from '../components/Common/SelectButton';

//images
import MoreDescription from '../assets/descriptions/more_description.png';
import MoreButton1 from '../assets/moreButtons/more_button1.png';
import MoreButton2 from '../assets/moreButtons/more_button2.png';
import MoreButton3 from '../assets/moreButtons/more_button3.png';
import MoreButton4 from '../assets/moreButtons/more_button4.png';
import MoreButton5 from '../assets/moreButtons/more_button5.png';

const MorePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const selectedMenu = useContext(SelectedMenu);
  const navigate = useNavigate();
  const menus = selectedMenu.menus;

	const sendMessage = async (e) => {
		e.preventDefault(); // Prevents the default form submission behavior

		const buttonId = e.currentTarget.id;

		let constraint = '';

    switch (buttonId) {
      case "1":
        constraint = "가장 덜 단 메뉴";
        break;
      case "2":
        constraint = "가장 인기있는 메뉴";
        break;
      case "3":
        constraint = "제일 빨리 나오는 메뉴";
        break;
      case "4":
        constraint = "먹기 편한 메뉴";
        break;
      case "5":
        constraint = "아무거나"
        break;
      default:
        break;
    }

		console.log(constraint);

		const apiUrl = 'https://api.openai.com/v1/chat/completions';
		const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

    const requestBody = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "메뉴를 조건에 맞춰줘.",
        },
        {
          role: "user",
          content:
            menus.map((item)=>{
              return item.name;
            })+
            " 이 메뉴들 중에서 다음 조건에 해당하는 메뉴 하나만 추천해주고 추천한 이유를 알려줘: " +
            constraint,
        },
      ],
    };

		try {
			const response = await fetch(apiUrl, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${apiKey}`,
				},
				body: JSON.stringify(requestBody),
			});

			const responseData = await response.json();

      if (responseData.choices && responseData.choices.length > 0) {
        console.log(
          "API response data:",
          responseData.choices[0].message.content
        );
      } else {
        console.log("No response data or choices array is empty.");
      }
    } catch (error) {
      console.log(error);
    }finally {
      // Set loading state back to false when the response is received
      setIsLoading(false);
    }
  };


	return (
		<div className={classes['page-container']}>
			<Header />
			<img src={MoreDescription} alt='more-description' />

      <div className={classes["buttons"]}>
        <button className={classes["more-btn"]} id="1" onClick={sendMessage}>
          <img src={MoreButton1} alt="more-button-1" />
        </button>
        <button className={classes["more-btn"]} id="2" onClick={sendMessage}>
          <img src={MoreButton2} alt="more-button-2" />
        </button>
        <button className={classes["more-btn"]} id="3" onClick={sendMessage}>
          <img src={MoreButton3} alt="more-button-3" />
        </button>
        <button className={classes["more-btn"]} id="4" onClick={sendMessage}>
          <img src={MoreButton4} alt="more-button-4" />
        </button>
        <button className={classes["more-btn"]} id="5" onClick={sendMessage}>
          <img src={MoreButton5} alt="more-button-5" />
        </button>
      </div>
      {/* Conditionally render the loading UI */}
      {isLoading ? <h1>Loading...</h1> : <div></div>}
    </div>
  );
};

export default MorePage;
