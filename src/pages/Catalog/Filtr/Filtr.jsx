import React from "react";
import "./Filtr.scss";

function Filtr() {
  return (
    <>
      <div className="section_filter">
        <div className="filter_input">
          <select className="selectOption">
            <option value="">Цена</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <div className="filter_input">02.07.22 | Отъезд</div>
        <div className="filter_input">
          <select className="selectOption">
            <option value="">С бассейном</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <div className="filter_input">
          <select className="selectOption">
            <option value="">Развлечения</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <div className="filter_input">
          <select className="selectOption">
            <option value="">Количество спален и спальных мест</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <div className="filter_input">
          <select className="selectOption">
            <option value="">Подборки</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <div className="filter_input">Заявка на подбор</div>
        <div className="filter_input">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clip-path="url(#clip0_102_2064)">
              <path
                d="M12.17 14.0025C12.3766 13.4169 12.7597 12.9099 13.2666 12.5512C13.7735 12.1926 14.3791 12 15 12C15.6209 12 16.2265 12.1926 16.7334 12.5512C17.2403 12.9099 17.6234 13.4169 17.83 14.0025H22V16.0025H17.83C17.6234 16.588 17.2403 17.095 16.7334 17.4537C16.2265 17.8123 15.6209 18.0049 15 18.0049C14.3791 18.0049 13.7735 17.8123 13.2666 17.4537C12.7597 17.095 12.3766 16.588 12.17 16.0025H2V14.0025H12.17ZM6.17 7.00245C6.3766 6.41692 6.75974 5.90988 7.2666 5.55124C7.77346 5.1926 8.37909 5 9 5C9.62091 5 10.2265 5.1926 10.7334 5.55124C11.2403 5.90988 11.6234 6.41692 11.83 7.00245H22V9.00245H11.83C11.6234 9.58798 11.2403 10.095 10.7334 10.4537C10.2265 10.8123 9.62091 11.0049 9 11.0049C8.37909 11.0049 7.77346 10.8123 7.2666 10.4537C6.75974 10.095 6.3766 9.58798 6.17 9.00245H2V7.00245H6.17ZM9 9.00245C9.26522 9.00245 9.51957 8.89709 9.70711 8.70956C9.89464 8.52202 10 8.26767 10 8.00245C10 7.73723 9.89464 7.48288 9.70711 7.29534C9.51957 7.10781 9.26522 7.00245 9 7.00245C8.73478 7.00245 8.48043 7.10781 8.29289 7.29534C8.10536 7.48288 8 7.73723 8 8.00245C8 8.26767 8.10536 8.52202 8.29289 8.70956C8.48043 8.89709 8.73478 9.00245 9 9.00245ZM15 16.0025C15.2652 16.0025 15.5196 15.8971 15.7071 15.7096C15.8946 15.522 16 15.2677 16 15.0025C16 14.7372 15.8946 14.4829 15.7071 14.2953C15.5196 14.1078 15.2652 14.0025 15 14.0025C14.7348 14.0025 14.4804 14.1078 14.2929 14.2953C14.1054 14.4829 14 14.7372 14 15.0025C14 15.2677 14.1054 15.522 14.2929 15.7096C14.4804 15.8971 14.7348 16.0025 15 16.0025Z"
                fill="#333333"
              />
            </g>
            <defs>
              <clipPath id="clip0_102_2064">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Фильтр
        </div>
      </div>
    </>
  );
}

export default Filtr;
