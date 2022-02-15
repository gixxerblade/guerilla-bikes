import { ReactElement, SVGProps } from "react";

interface Props {
  fill?: string,
}

export const Guerilla = ({
  fill = '#fff',
}: Props, props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <div className="">
    <svg
      viewBox="0 0 418 226.301"
      preserveAspectRatio="xMidYMid meet"
      width="418"
      height="226.301"
      {...props}
    >
      <path
        style={{
          fill,
        }}
        d="M197.223 226.812a19818.568 19818.568 0 0 0-65-16.916c-18.425-4.756-34.269-8.885-35.208-9.175-1.382-.427-1.765-1.997-2-8.186l-.292-7.657-22-5.29c-12.1-2.91-28.862-6.94-37.25-8.954l-15.25-3.662v-53.777c0-29.577.34-53.986.757-54.244.416-.257 31.804-7.933 69.75-17.057 37.946-9.124 84.743-20.392 103.993-25.04l35-8.45 104.25 25.151 104.25 25.15v108.346l-27.75 6.731a23788.43 23788.43 0 0 1-36.461 8.821l-8.711 2.09-.289 7.516-.289 7.515-3.5 1.242c-3.19 1.132-125.85 32.836-130.5 33.73-1.1.212-16.175-3.336-33.5-7.884zm47.15-8.011c-.192-.55-.755-.888-1.25-.75-.495.137-.9-.425-.9-1.25s.765-1.5 1.7-1.5c1.17 0 1.378-.323.668-1.033-2.263-2.263-6.577 2.268-4.838 5.081.822 1.329 5.1.821 4.62-.548zm-26.541-2.25c-.103-2.6-1.183-4.2-2.859-4.235-.412-.008-.75 1.56-.75 3.485 0 2.744.402 3.5 1.859 3.5 1.386 0 1.83-.698 1.75-2.75zm44.82-1.822c1.883-1.883 2.061-5.028.321-5.69-2.444-.93-5.75 1.118-5.75 3.563 0 3.97 2.576 4.98 5.43 2.127zm-3.429-1.845c0-.87.713-1.583 1.584-1.583.87 0 1.405.534 1.187 1.187-.618 1.855-2.77 2.162-2.77.396zm-57.75 1.755c-.687-.278-1.25-1.817-1.25-3.421 0-1.605-.45-2.917-1-2.917s-1 1.575-1 3.5c0 2.986.33 3.488 2.25 3.421 1.238-.043 1.688-.306 1-.583zm-16.598-4.851c-2.055-1.503-2.115-2.487-.152-2.487 2.002 0 1.916-1.627-.126-2.41-1.656-.636-4.374.938-4.374 2.532 0 1.622 4.062 4.958 5.188 4.262.76-.47.588-1.075-.536-1.897zm94.348.544c0-.532.675-.71 1.5-.393.877.337 1.507.012 1.516-.781.013-1.143.151-1.143.875 0 1.266 1.999 2.302-.24 1.532-3.311-.722-2.875-2.184-3.33-3.093-.962-.446 1.162-.807 1.261-1.357.372-.412-.667-1.25-.903-1.86-.525-1.383.854-1.48 6.569-.113 6.569.55 0 1-.436 1-.969zm-112-4.972c0-1.068.458-2.224 1.017-2.57.559-.345.753-1.054.43-1.574-.321-.521-1.023-.677-1.56-.345-.535.331-1.714 0-2.618-.734-1.447-1.177-1.546-1.098-.827.664.449 1.1 1.035 3.012 1.304 4.25.598 2.756 2.254 2.984 2.254.309zm133.592-1.31c3.243-3.073 3.102-4.962-.342-4.566-2.291.264-2.802.859-3.063 3.567-.37 3.843.223 4.017 3.405 1zm-20.092-11.332c26.4-6.397 55.853-13.578 65.45-15.96 9.597-2.38 17.81-4.106 18.25-3.834.44.272.8 1.818.8 3.436 0 1.617.386 2.94.857 2.94.829 0 61.858-14.576 65.393-15.618 1.637-.482 1.75-3.78 1.75-50.948 0-27.738-.23-50.433-.51-50.433s-33.243-7.896-73.25-17.548c-40.007-9.65-83.09-20.042-95.74-23.092-12.65-3.05-25.419-6.151-28.376-6.89l-5.376-1.346-102.374 24.628L25.223 62.68v50.31c0 27.671.149 50.31.33 50.31.18 0 15.277 3.6 33.546 8 18.27 4.4 33.872 8 34.671 8 1 0 1.453-1.113 1.453-3.566 0-2.934.311-3.473 1.75-3.036 1.574.478 35.07 8.673 86.25 21.1 10.175 2.47 24.575 6.032 32 7.915 7.425 1.882 14.4 3.245 15.5 3.028 1.1-.216 23.6-5.627 50-12.023zm-59.034-1.667c-2.458-6.513-27.466-82.528-27.466-83.486 0-.959 3.385-1.264 14-1.264h14v-34c0-18.7-.337-33.988-.75-33.973-.412.015-8.4 1.956-17.75 4.313l-17 4.285-.256 68.292c-.233 61.668-.41 68.233-1.832 67.687-.866-.332-1.763-.604-1.993-.604-.23 0-.419-31.033-.419-68.962V44.378l3.75-.987c2.063-.543 11.738-2.984 21.5-5.424l17.75-4.437v76.771h-13c-7.15 0-13 .393-13 .873s5.85 18.571 13 40.204c7.15 21.632 13 39.689 13 40.127 0 1.295-3.02.907-3.534-.454zm25.093-38.924c7.393-22.164 13.441-40.629 13.441-41.033 0-.404-5.962-.86-13.25-1.014l-13.25-.28-.262-36.995c-.144-20.348-.063-37.517.181-38.153.392-1.02 14.654 2.11 39.831 8.739l3.75.987v68.854c0 61.864-.16 68.917-1.581 69.462-.87.334-1.767.607-1.993.607-.227 0-.527-30.692-.669-68.203l-.257-68.204-17-4.247c-9.35-2.336-17.337-4.27-17.75-4.297-.412-.027-.75 15.25-.75 33.95v34h14c10.588 0 14 .308 14 1.26 0 .692-6.223 19.93-13.83 42.75-12.05 36.15-14.101 41.531-15.941 41.803-1.923.284-.91-3.292 11.33-39.986zm-90.559 24.263-15.5-3.682-.257-59.508-.258-59.508 15.758-3.701c17.815-4.185 18.257-4.239 18.257-2.229 0 1.56-.886 1.847-18.75 6.06l-11.25 2.653v49.826h15c14.334 0 15 .089 15 2s-.666 2-15.014 2h-15.015l.265 29.739.264 29.738 14.75 3.448c12.31 2.878 14.75 3.748 14.75 5.262 0 2.254.635 2.328-18-2.098zm132-63.09c0-64.332.021-65 2-65 1.98 0 2 .668 2 65 0 64.334-.02 65-2 65-1.979 0-2-.666-2-65zm17-.572c0-58.103.1-61.555 1.75-61.237 1.64.316 1.767 4.047 2.008 59.074.242 55.088.367 58.734 2 58.698.959-.02 7.054-1.315 13.546-2.876 11.611-2.791 11.798-2.804 11.5-.78-.263 1.783-2.23 2.495-14.804 5.355-7.975 1.815-14.837 3.308-15.25 3.32-.412.01-.75-27.69-.75-61.554zm-194.76 49.804-16.26-4.545.26-46.58c.243-43.447.378-46.602 2.01-46.916 1.646-.317 1.75 2.37 1.75 45.218v45.554l2.25.519c1.238.286 6.975 1.644 12.75 3.018 5.775 1.374 11.059 2.499 11.742 2.5.969 0 1.298-11.552 1.5-52.736.242-49.311.372-52.758 2.008-53.073 1.65-.317 1.75 2.872 1.75 55.737 0 52.779-.102 56.066-1.75 55.961-.962-.061-9.066-2.157-18.01-4.657zm234.76-50.707c0-42.508.26-53.604 1.25-53.274.974.324 1.308 11.467 1.51 50.293.143 27.432.632 50.249 1.088 50.705.457.456 4.829-.062 9.716-1.151 4.888-1.09 9.066-1.8 9.285-1.582.22.22.149 1.05-.156 1.844-.339.882-4.381 2.315-10.374 3.677-5.4 1.227-10.381 2.444-11.069 2.704-.99.376-1.25-10.678-1.25-53.216zm31-.558c0-37.32.262-47.085 1.25-46.727.688.25 8.788 2.172 18 4.273l16.75 3.818v39.228c0 32.731-.232 39.317-1.402 39.766-.771.296-1.671.27-2-.06-.329-.328-.598-9.747-.598-20.93V110.3H380.26l-.268 23.737c-.245 21.688-.42 23.766-2.019 24.073-1.646.317-1.75-2.449-1.75-46.844zm32-20.375V75.484l-13.088-3.092c-7.199-1.7-13.499-3.091-14-3.091-.516 0-.912 8.033-.912 18.5v18.5h28zm-340.5 60.838c-7.7-1.842-15.012-3.6-16.25-3.908l-2.25-.56v-36.48c0-20.065.338-36.486.75-36.493.413-.006 7.451-1.581 15.64-3.5 16.966-3.974 17.61-4.046 17.61-1.957 0 1.84.789 1.574-16.263 5.488l-13.763 3.16.263 33.563.263 33.563 13.743 3.188c7.559 1.754 13.971 2.96 14.25 2.68.28-.278.507-9.431.507-20.34v-19.833H72.15c-9.055 0-10.04-.177-9.738-1.75.292-1.522 1.798-1.787 11.573-2.033l11.238-.283v24.533c0 22.74-.127 24.525-1.75 24.422-.962-.062-8.05-1.618-15.75-3.46zm83.5 50.678c0-.491-.675-1.152-1.5-1.469-.825-.316-1.5-1.04-1.5-1.607s.675-1.031 1.5-1.031 1.5-.481 1.5-1.07c0-.588-1.007-.925-2.24-.75-2.57.367-3.49 3.235-1.72 5.368 1.327 1.599 3.96 1.97 3.96.559zm165.526-1.148c.353-.572 1.505-.767 2.559-.432 2.203.699 2.262.514.94-2.962-1.328-3.495-3.599-3.226-4.927.584-.603 1.732-1.098 3.307-1.098 3.5 0 .8 1.931.272 2.526-.69zm-182.526-6.018c0-1.618-.45-2.941-1-2.941s-1 1.601-1 3.559c0 2.118.405 3.309 1 2.94.55-.339 1-1.94 1-3.558zm201 .559c0-1.698 1.566-2.011 2.5-.5 1.323 2.14 2.499.829 2.469-2.75-.028-3.295-.19-3.542-1.335-2.035-.932 1.226-1.61 1.408-2.381.637-.593-.593-1.567-.775-2.165-.406-1.365.844-1.441 6.554-.087 6.554.55 0 1-.675 1-1.5zm-216-3.465c0-2.866-2.929-5.772-4.368-4.333-1.13 1.13-.665 6.118.618 6.636 2.82 1.137 3.75.565 3.75-2.303zm238-2.894c0-.958.563-2.34 1.25-3.07 1.03-1.095.722-1.204-1.747-.619-3.818.905-3.743.786-2.532 3.97 1.083 2.848 3.03 2.668 3.03-.281z"
        transform="translate(-20.223 -8.404)"
      />
    </svg>
  </div>
)
