'use client';

import styles from './NavigationTab.module.scss';

const NavigationTab = ({ selectedTab, itemIcon, handleClick, title, index }) => {
  return (
    <div
      onClick={() => handleClick(index)}
      className={`${styles['navigation-tab']} ${selectedTab === index ? styles['active'] : ''}`}
    >
      {itemIcon != undefined || itemIcon != null ? (
        <div className={styles['navigation-tab__icon']}>
          <svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.9958 1.95141C15.4172 1.51665 16.1116 1.50694 16.545 1.92975L21.4231 6.68868C21.8566 7.1116 22.5513 7.10177 22.9726 6.66674L26.3641 3.1653C26.7854 2.73028 27.4801 2.72044 27.9136 3.14336L29.1268 4.32697C29.5582 4.74775 29.5679 5.43811 29.1487 5.87093L23.0502 12.1672C22.6289 12.6022 21.9342 12.612 21.5007 12.1891L16.6216 7.42921C16.1882 7.00639 15.4938 7.0161 15.0724 7.45087L11.6789 10.9518C11.2574 11.3867 10.5628 11.3963 10.1294 10.9732L8.91659 9.78918C8.48543 9.36825 8.4759 8.67788 8.89528 8.24521L14.9958 1.95141Z"
              fill="#212428"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.53328 25.5072C2.11829 25.088 2.11044 24.4152 2.51553 23.9865L8.30418 17.8594C8.72889 17.4099 9.44153 17.4016 9.87662 17.8411L11.0229 18.999C11.4379 19.4182 11.4457 20.0909 11.0406 20.5197L5.25199 26.6467C4.82728 27.0963 4.11464 27.1046 3.67955 26.6651L2.53328 25.5072Z"
              fill="#212428"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.0635 21.4632C18.4738 21.0359 18.4693 20.3596 18.0534 19.9378L13.8823 15.7068C13.4624 15.2808 13.4625 14.5965 13.8826 14.1707L15.1973 12.8379C15.6258 12.4036 16.3267 12.4038 16.755 12.8382L23.7166 19.8998C24.1325 20.3216 24.137 20.9979 23.7267 21.4252L16.9505 28.4831C16.528 28.9231 15.8272 28.9325 15.393 28.5039L14.0613 27.1892C13.6356 26.769 13.6264 26.0848 14.0407 25.6533L18.0635 21.4632Z"
              fill="#212428"
            />
          </svg>
        </div>
      ) : null}

      {title}
    </div>
  );
};

export default NavigationTab;
