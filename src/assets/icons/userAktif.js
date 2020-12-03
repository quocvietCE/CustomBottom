import React from 'react';
import {View} from 'react-native';
import Svg, {Path, G, Defs, Rect, ClipPath} from 'react-native-svg';

const userAkif = () => {
  console.log('userAkif: ');
  return (
    <View>
      <Svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <G>
          <Path
            d="M21.5313 3.84714C19.1718 1.38424 15.907 -0.00570536 12.4962 0.000570477C5.60335 -0.0081111 0.00850073 5.57263 -0.000180839 12.4655C-0.00446933 15.8738 1.38531 19.1356 3.84638 21.4935C3.85355 21.5006 3.85622 21.5113 3.86333 21.5176C3.93561 21.5872 4.01416 21.6461 4.08738 21.7131C4.2882 21.8916 4.48903 22.0764 4.70058 22.2486C4.81391 22.3379 4.93174 22.4271 5.04779 22.5092C5.24773 22.6583 5.44766 22.8073 5.65649 22.9448C5.79843 23.0341 5.94481 23.1233 6.09026 23.2126C6.28303 23.3286 6.47497 23.4455 6.67401 23.5517C6.84273 23.641 7.01495 23.7177 7.18633 23.799C7.37377 23.8882 7.55854 23.9775 7.75042 24.0578C7.94231 24.1381 8.13513 24.2006 8.32968 24.2702C8.52423 24.3398 8.69206 24.4041 8.87861 24.4612C9.08927 24.5246 9.30526 24.5737 9.51948 24.6263C9.69797 24.67 9.87113 24.72 10.055 24.7558C10.3013 24.8049 10.5513 24.8361 10.8012 24.87C10.9557 24.8915 11.1065 24.9218 11.2626 24.937C11.6715 24.9771 12.0838 24.9995 12.4997 24.9995C12.9156 24.9995 13.328 24.9771 13.7368 24.937C13.893 24.9218 14.0438 24.8915 14.1982 24.87C14.4482 24.8361 14.698 24.8049 14.9444 24.7558C15.1229 24.72 15.3015 24.6665 15.48 24.6263C15.6942 24.5737 15.9102 24.5246 16.1208 24.4612C16.3074 24.4041 16.4876 24.3345 16.6697 24.2702C16.8519 24.206 17.0589 24.1363 17.249 24.0578C17.4391 23.9792 17.6257 23.8873 17.8131 23.799C17.9845 23.7177 18.1568 23.641 18.3254 23.5517C18.5245 23.4455 18.7163 23.3286 18.9092 23.2126C19.0547 23.1233 19.2011 23.0421 19.3429 22.9448C19.5518 22.8074 19.7518 22.6583 19.9516 22.5092C20.0677 22.42 20.1855 22.3396 20.2989 22.2486C20.5104 22.079 20.7112 21.8987 20.9121 21.7131C20.9852 21.6461 21.0638 21.5873 21.1361 21.5176C21.1432 21.5114 21.1459 21.5006 21.153 21.4935C26.1305 16.725 26.2998 8.82445 21.5313 3.84714ZM19.5252 20.559C19.3628 20.7018 19.1949 20.8374 19.0254 20.9687C18.9254 21.0454 18.8254 21.1213 18.7228 21.1945C18.5612 21.3114 18.397 21.4221 18.2301 21.5283C18.1087 21.606 17.9846 21.6809 17.8596 21.7541C17.7025 21.8434 17.5428 21.9326 17.3812 22.0219C17.2384 22.0951 17.0929 22.1638 16.9466 22.2317C16.8002 22.2995 16.6386 22.3718 16.4806 22.4352C16.3226 22.4986 16.1549 22.5583 15.9897 22.6137C15.8389 22.6654 15.688 22.719 15.5354 22.7645C15.3569 22.8181 15.1703 22.8618 14.9856 22.9064C14.841 22.9403 14.6982 22.9787 14.5518 23.0073C14.3403 23.0484 14.1243 23.0769 13.9074 23.1064C13.7842 23.1224 13.6619 23.1448 13.5378 23.1573C13.1951 23.1903 12.8479 23.2099 12.4971 23.2099C12.1463 23.2099 11.7991 23.1903 11.4564 23.1573C11.3323 23.1448 11.21 23.1224 11.0868 23.1064C10.8699 23.0769 10.6539 23.0484 10.4424 23.0073C10.296 22.9788 10.1532 22.9404 10.0086 22.9064C9.82386 22.8618 9.63997 22.8172 9.45881 22.7645C9.3062 22.719 9.15532 22.6654 9.00449 22.6137C8.83939 22.5566 8.67423 22.4985 8.51357 22.4352C8.3529 22.3718 8.20119 22.3022 8.04764 22.2317C7.89409 22.1612 7.75576 22.0951 7.61298 22.0219C7.45143 21.938 7.29166 21.8496 7.13456 21.7541C7.00961 21.681 6.88551 21.606 6.76412 21.5283C6.59724 21.4221 6.43297 21.3114 6.27142 21.1945C6.16876 21.1213 6.06881 21.0454 5.96882 20.9687C5.79921 20.8374 5.63144 20.7009 5.469 20.559C5.42972 20.5295 5.394 20.492 5.35567 20.4581C5.39557 17.4218 7.34616 14.7407 10.2228 13.7683C11.6612 14.4525 13.3312 14.4525 14.7696 13.7683C17.6462 14.7407 19.5968 17.4217 19.6368 20.4581C19.5993 20.492 19.5635 20.526 19.5252 20.559ZM9.38376 7.15701C10.3502 5.43827 12.5269 4.82841 14.2457 5.79484C15.9644 6.76127 16.5742 8.93799 15.6078 10.6567C15.2872 11.227 14.816 11.6982 14.2457 12.0189C14.2412 12.0189 14.2358 12.0189 14.2305 12.0242C13.9938 12.156 13.7436 12.2619 13.4843 12.3402C13.4379 12.3536 13.395 12.3714 13.346 12.3831C13.2567 12.4063 13.163 12.4223 13.071 12.4384C12.8979 12.4687 12.7228 12.4862 12.5471 12.4911H12.4453C12.2697 12.4862 12.0945 12.4687 11.9214 12.4384C11.8321 12.4223 11.7375 12.4063 11.6465 12.3831C11.5992 12.3714 11.5572 12.3536 11.5082 12.3402C11.2488 12.2619 10.9987 12.156 10.762 12.0242L10.7459 12.0189C9.02719 11.0525 8.41734 8.87576 9.38376 7.15701ZM21.2201 18.6882C20.6474 16.0166 18.8881 13.7517 16.4414 12.5358C18.4415 10.357 18.2967 6.96921 16.1178 4.96905C13.939 2.96888 10.5513 3.11375 8.55112 5.29257C6.67077 7.34089 6.67077 10.4875 8.55112 12.5358C6.10432 13.7518 4.3451 16.0166 3.77233 18.6882C0.349697 13.8671 1.48332 7.18431 6.30437 3.76168C11.1254 0.339047 17.8082 1.47267 21.2309 6.29372C22.5175 8.10602 23.2081 10.2739 23.207 12.4964C23.207 14.7171 22.5123 16.8821 21.2201 18.6882Z"
            fill="#6C77EB"
          />
        </G>
        <Defs>
          <ClipPath id="clip0">
            <Rect width="25" height="25" fill="white" />
          </ClipPath>
        </Defs>
      </Svg>
    </View>
  );
};

export default userAkif;
