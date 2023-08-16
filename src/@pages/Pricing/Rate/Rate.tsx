import { Button, ButtonSize, ButtonVariant } from "@/components/Button";
import { FC, useState } from "react";
import * as S from "./Rate.styled";
import { useRouter } from "next/router";
import { Icon } from "@/shared/ui/icon";
import { Icons } from "@/shared/ui/icons";
import { Link } from "@/components/Link";
import { LinkSize } from "@/components/Link/Link.styled";
import { LinkVariant } from "@/components/Link/Link";

enum Variant {
  Monthly = "Monthly",
  Yearly = "Yearly",
}

const items = [
  {
    id: 1,
    title: "Lite",
    text: "Тільки меню",
    [Variant.Monthly]: 400,
    [Variant.Yearly]: 0,
  },
  {
    id: 2,
    title: "Basic",
    text: "Базовий тариф",
    [Variant.Monthly]: 800,
    [Variant.Yearly]: 0,
  },
  {
    id: 3,
    title: "Smart",
    text: "Комплексне рішення",
    [Variant.Monthly]: 1500,
    [Variant.Yearly]: 0,
  },
  {
    id: 4,
    title: "Pro",
    text: "Для великих закладів",
    [Variant.Monthly]: 2500,
    [Variant.Yearly]: 0,
  },
];

const Rate: FC = () => {
  const [variant, setVariant] = useState<Variant>(Variant.Yearly);
  const router = useRouter();

  return (
    <S.Section>
      <div className="container">
        <S.Title>Виберіть ідеальний план для закладу</S.Title>
        <S.Buttons className={variant === Variant.Monthly ? "left" : "right"}>
          <S.Btn
            className={variant === Variant.Monthly ? "active" : ""}
            onClick={() => setVariant(Variant.Monthly)}
          >
            Щомісячно
          </S.Btn>
          <S.Btn
            className={variant === Variant.Yearly ? "active" : ""}
            onClick={() => setVariant(Variant.Yearly)}
          >
            Річна підписка
          </S.Btn>
          <S.Discount>
            економія
            <span>
              <svg fill="none" viewBox="0 0 16 15">
                <path
                  fill="currentColor"
                  d="M6.618 11.499c-.973-.402-1.896-.92-2.7-1.601-1.11-.94-1.435-1.938-.816-3.315.74-1.647 1.68-3.187 2.735-4.653.69-.956-.921-1.915-1.592-.935-.958 1.405-1.802 2.869-2.49 4.43-.405.913-.98 1.969-.827 3.003.332 2.238 3.507 3.667 5.361 4.309.793.277 1.07-.931.329-1.238Z"
                />
                <path
                  fill="currentColor"
                  d="M1.942 8.974c2.002-.432 4-.842 6.007-1.251 1.948-.396 4.147-.594 5.98-1.353.86-.358.883-1.869-.248-1.786-1.964.143-3.95.91-5.848 1.428-2.08.566-4.158 1.133-6.243 1.676-.838.216-.483 1.467.352 1.286Z"
                />
              </svg>
            </span>
            15%
          </S.Discount>
        </S.Buttons>
        <S.Wrapper>
          {items.map((item, index) => (
            <S.Item key={item.id} className={index === 2 ? "primary" : ""}>
              <S.Headline>
                {item.title}
                <span>{item.text}</span>
              </S.Headline>
              <S.Price>
                ₴{item[variant]}
                <span>за локацію / місяць</span>
              </S.Price>
              <S.Text>
                <p>
                  Економте <span>₴{item[variant]}</span> при оплаті щорічно
                </p>
              </S.Text>
              <Button
                size={ButtonSize.xxl}
                variant={
                  index === 2 ? ButtonVariant.White : ButtonVariant.Primary
                }
                onClick={() => router.push("/registration")}
              >
                Спробувати
              </Button>
              <Link size={LinkSize.xl} variant={LinkVariant.Secondary} href="">
                Усі можливості
                <Icon name={Icons.ChevronDown} size={16} />
              </Link>
            </S.Item>
          ))}
        </S.Wrapper>
        <S.Description>Цінам та сервісу entree довіряють</S.Description>
        <S.List>
          <S.Icon>
            <svg fill="none" viewBox="0 0 56 19">
              <path
                fill="#000"
                fillRule="evenodd"
                d="M48.4 11.059h1.688c.176.003.323-.148.33-.34V5.63c0-.64.03-1.217.268-1.795.162-.439.545-.735.98-.756 1.078 0 1.068 1.287 1.06 2.298l-.002.25v5.136c.021.165.147.29.3.297h1.702c.161.003.3-.124.325-.297V4.81c0-.915 0-2.19-.442-2.946C54.131 1.048 53.391.75 52.633.75c-1.168 0-1.832.617-2.306 1.91h-.032V1.213a.327.327 0 0 0-.3-.264h-1.57c-.166-.004-.307.13-.325.31v9.46c.002.182.133.33.3.34Zm-1.59-4.962c0-2.985-1.358-5.334-3.87-5.334-2.448 0-3.807 2.31-3.807 5.234 0 2.925 1.342 5.274 3.807 5.274 2.373 0 3.87-2.289 3.87-5.174Zm-5.18-.398c0-1.155.079-3.005 1.327-3.005.536 0 .915.263 1.105.915.222.756.253 1.711.253 2.507 0 1.214-.05 3.204-1.375 3.204-1.311 0-1.31-2.413-1.31-3.583v-.038Zm-31.656 5.38h1.693a.306.306 0 0 0 .229-.098.363.363 0 0 0 .098-.244V5.646c0-1.09-.002-2.531 1.168-2.531 1.082 0 1.065 1.266 1.052 2.29l-.003.32v5.014c.003.18.134.329.3.34h1.695a.306.306 0 0 0 .228-.098.362.362 0 0 0 .098-.244V5.605c-.002-.53-.003-1.247.158-1.692.165-.456.563-.76 1.011-.775.49 0 .87.18.995.815.064.307.056 1.016.05 1.487l-.002.285v5.014c.002.181.133.33.3.34h1.691a.306.306 0 0 0 .229-.098.363.363 0 0 0 .098-.244V4.77c0-.145.002-.294.004-.444.014-.892.029-1.84-.431-2.521C20.077 1.03 19.18.646 18.288.796c-.892.15-1.64.813-1.957 1.733-.475-1.195-1.154-1.751-2.196-1.751-1.043 0-1.818.556-2.228 1.751h-.031V1.295c-.01-.176-.138-.317-.3-.327H9.998c-.174-.001-.317.149-.323.338v9.46c.015.17.143.303.3.312Zm-2.943.07a.327.327 0 0 1-.4.045 3.833 3.833 0 0 1-.845-1.03 20.833 20.833 0 0 0-.124-.198c-.93 1.03-1.588 1.339-2.79 1.339-1.426 0-2.534-.958-2.534-2.873 0-1.495.749-2.511 1.798-3.01.774-.37 1.807-.485 2.7-.585.166-.018.328-.036.481-.055v-.238l.001-.139c.003-.406.006-.858-.206-1.199-.206-.339-.599-.477-.95-.477-.645 0-1.22.36-1.361 1.105a.374.374 0 0 1-.3.34L.874 3.98a.297.297 0 0 1-.201-.134.35.35 0 0 1-.05-.251C.999 1.429 2.796.775 4.407.775c.824 0 1.9.238 2.546.916.76.775.755 1.788.75 2.896v3.146c0 .772.263 1.157.54 1.562l.1.146c.107.163.13.366 0 .489-.347.315-.961.895-1.298 1.223l-.014-.003Zm-1.706-4.49v.09c0 .678.001 1.253-.316 1.867-.27.519-.697.839-1.173.839-.649 0-1.028-.539-1.028-1.338 0-1.57 1.293-1.855 2.517-1.855v.397Zm25.098 2.63.1.146c.113.17.137.369-.008.481-.346.315-.96.897-1.298 1.224a.33.33 0 0 1-.4.042c-.48-.436-.623-.667-.849-1.033a20.63 20.63 0 0 0-.121-.195c-.93 1.03-1.591 1.339-2.79 1.339-1.424 0-2.533-.958-2.533-2.87 0-1.498.745-2.514 1.805-3.014.776-.37 1.815-.485 2.711-.584.163-.018.32-.035.471-.053V4.4c.004-.406.007-.858-.207-1.197-.2-.34-.6-.48-.95-.48-.645 0-1.217.36-1.36 1.106a.375.375 0 0 1-.3.34l-1.64-.193a.297.297 0 0 1-.203-.134.35.35 0 0 1-.05-.253c.378-2.168 2.175-2.82 3.786-2.82.822 0 1.898.238 2.547.917.76.77.756 1.776.75 2.878l-.001.294v2.87c0 .772.263 1.156.54 1.561Zm-4.398.156c.474 0 .903-.32 1.17-.837.32-.618.319-1.196.319-1.883v-.472c-1.224 0-2.517.284-2.517 1.855 0 .797.379 1.336 1.027 1.336Zm5.929-8.17V2.62a.35.35 0 0 0 .094.245c.06.065.143.1.228.096h2.912l-3.34 5.22c-.152.28-.224.602-.206.927v1.379c0 .199.202.425.396.313a5.944 5.944 0 0 1 5.877-.012c.21.12.41-.11.41-.31V9.031a.625.625 0 0 0-.3-.527c-.972-.595-2.103-.77-3.173-.742l2.883-4.479c.268-.401.418-.656.418-.85v-1.16a.354.354 0 0 0-.094-.244.297.297 0 0 0-.227-.096H32.27a.286.286 0 0 0-.228.094.342.342 0 0 0-.088.247Z"
                clipRule="evenodd"
              />
              <path
                fill="#F90"
                fillRule="evenodd"
                d="M34.737 17.094c.386-1.042 1.242-3.378.835-3.944h.003c-.406-.567-2.683-.27-3.707-.136h-.002c-.312.041-.36-.254-.08-.468 1.819-1.39 4.799-.993 5.145-.523.346.47-.095 3.722-1.798 5.275-.262.238-.512.11-.396-.204ZM22.5 18.702c3.96 0 8.573-1.362 11.75-3.914v.005c.526-.431.075-1.064-.46-.816a26.598 26.598 0 0 1-10.956 2.447c-5.223 0-10.274-1.56-14.36-4.148-.359-.227-.625.173-.326.465 3.935 3.865 9.053 5.99 14.352 5.961Z"
                clipRule="evenodd"
              />
            </svg>
          </S.Icon>
          <S.Icon className="klarna">
            <svg fill="none" viewBox="0 0 56 15">
              <path
                fill="#17120F"
                fillRule="evenodd"
                d="M3.1 14.04H.315V.75H3.1v13.29ZM10.045.75H7.324c0 2.446-1.026 4.69-2.815 6.16l-1.079.885 4.18 6.246h3.436L7.2 8.294c1.823-1.99 2.846-4.667 2.846-7.544Zm4.44 13.287h-2.629V.753h2.629v13.284Zm7.94-9.19v.589a4.135 4.135 0 0 0-2.489-.842c-2.443 0-4.424 2.17-4.424 4.849 0 2.678 1.981 4.849 4.424 4.849.923 0 1.78-.312 2.488-.842v.587h2.51v-9.19h-2.51Zm-.009 4.596c0 1.305-1.018 2.364-2.274 2.364s-2.275-1.059-2.275-2.364c0-1.306 1.019-2.365 2.275-2.365s2.274 1.059 2.274 2.365Zm26.49-4.007v-.588h2.51v9.19h-2.51v-.588a4.14 4.14 0 0 1-2.489.842c-2.443 0-4.424-2.171-4.424-4.85 0-2.677 1.981-4.848 4.424-4.848.924 0 1.78.311 2.489.842Zm-2.283 6.371c1.256 0 2.274-1.059 2.274-2.364 0-1.306-1.018-2.365-2.274-2.365-1.257 0-2.275 1.059-2.275 2.365 0 1.305 1.019 2.364 2.275 2.364Zm5.884.697c0-.953.705-1.726 1.575-1.726s1.575.773 1.575 1.726c0 .954-.705 1.727-1.575 1.727s-1.575-.773-1.575-1.727ZM37.535 4.6c-1.002 0-1.951.342-2.586 1.283V4.848H32.45v9.19h2.53v-4.83c0-1.397.855-2.082 1.884-2.082 1.104 0 1.738.723 1.738 2.063v4.848h2.507V8.193c0-2.138-1.551-3.593-3.574-3.593Zm-8.717.248v1.197c.503-.718 1.44-1.197 2.46-1.197v2.674h-.03c-.993 0-2.424.777-2.424 2.225v4.29h-2.576v-9.19h2.57Z"
                clipRule="evenodd"
              />
            </svg>
          </S.Icon>
          <S.Icon className="master">
            <svg fill="none" viewBox="0 0 45 29">
              <path
                fill="#ED0006"
                d="M27.236 14.387c0 7.716-5.97 13.97-13.334 13.97S.568 22.104.568 14.388c0-7.715 5.97-13.97 13.334-13.97s13.334 6.255 13.334 13.97Z"
              />
              <path
                fill="#0099DF"
                d="M44.533 14.387c0 7.716-5.97 13.97-13.334 13.97s-13.334-6.254-13.334-13.97c0-7.715 5.97-13.97 13.334-13.97s13.334 6.255 13.334 13.97Z"
              />
              <path
                fill="#6C6BBD"
                fillRule="evenodd"
                d="M22.55 25.02c2.867-2.562 4.686-6.375 4.686-10.633 0-4.258-1.819-8.07-4.686-10.633-2.867 2.562-4.685 6.375-4.685 10.633 0 4.258 1.818 8.071 4.685 10.633Z"
                clipRule="evenodd"
              />
            </svg>
          </S.Icon>
          <S.Icon className="lighcoin">
            <svg fill="none" viewBox="0 0 33 34">
              <path
                fill="#A5A8A9"
                fillRule="evenodd"
                d="M32.787 17c0 9.204-7.204 16.666-16.091 16.666C7.807 33.666.604 26.204.604 17 .604 7.795 7.808.333 16.695.333 25.584.333 32.787 7.795 32.787 17Zm-20.459 1.237 2.269-8.813h4.916l-1.702 6.855 2.27-.98-.568 2.155-2.27.783-1.134 4.309h8.132l-.757 3.133H10.436l1.325-5.288-1.891.784.566-2.154 1.892-.784Z"
                clipRule="evenodd"
              />
            </svg>
          </S.Icon>
          <S.Icon className="giropay">
            <svg fill="none" viewBox="0 0 52 22">
              <path
                fill="#0F3365"
                fillRule="evenodd"
                d="M3.932 2.13c-1.213.003-2.194.929-2.196 2.073v13.76c.002 1.145.983 2.071 2.196 2.073h22.849V2.131H3.932ZM3.933.584h43.73c2.118 0 3.834 1.62 3.835 3.62v13.76c-.001 2-1.717 3.62-3.836 3.62H3.933c-2.119 0-3.835-1.62-3.835-3.62V4.204c0-2 1.716-3.62 3.835-3.62Z"
                clipRule="evenodd"
              />
              <path
                fill="#FFFFFE"
                fillRule="evenodd"
                d="M30.522 15.713h-1.918V8.357h1.769v.946h.021c.384-.735 1.194-1.067 2.068-1.067 1.535 0 2.377 1.379 2.377 2.646 0 1.55-.885 2.837-2.537 2.837-.671 0-1.396-.23-1.759-.854h-.021v2.847Zm1.174-3.381c.724 0 1.161-.573 1.161-1.409 0-.694-.416-1.297-1.162-1.297-.703 0-1.173.583-1.173 1.368 0 .765.534 1.338 1.174 1.338Zm10.495 3.38c.394.081.788.121 1.194.121 1.659 0 2.123-1.137 2.626-2.372l.091-.223 2.036-4.88H46.22l-1.14 3.42h-.022l-1.194-3.42h-2.067l2.248 5.362c-.138.463-.5.725-.969.725a2.39 2.39 0 0 1-.757-.111l-.128 1.378Zm-.717-1.942a6.078 6.078 0 0 1-.107-1.237V10.58c0-1.6-1.225-2.173-2.643-2.173-.821 0-1.535.11-2.217.372l.031 1.228c.534-.282 1.152-.393 1.77-.393.693 0 1.258.191 1.269.906a5.894 5.894 0 0 0-.895-.071c-1.024 0-2.868.192-2.868 1.791 0 1.137.98 1.65 2.079 1.65.788 0 1.321-.292 1.758-.946h.021c0 .16.011.32.023.481.008.114.016.228.02.344h1.759Zm-3.87-1.66c0-.503.51-.694 1.161-.694.204 0 .402.01.588.02l.222.01c0 .614-.458 1.238-1.183 1.238-.448 0-.789-.212-.789-.573Z"
                clipRule="evenodd"
              />
              <path
                fill="#D8232A"
                fillRule="evenodd"
                d="M11.93 13.6h1.918V8.358H11.93V13.6Zm0-6.097h1.918V6.175H11.93v1.328Zm6.61.735c.223 0 .457.03.65.06l-.097 1.509c-.213-.06-.426-.06-.65-.06-.895 0-1.396.613-1.396 1.64V13.6h-1.918V8.358h1.748v.966h.02c.331-.664.81-1.086 1.642-1.086Zm7.182 2.746c0 1.73-1.397 2.737-3.23 2.737s-3.229-1.006-3.229-2.737c0-1.74 1.396-2.746 3.23-2.746 1.832 0 3.229 1.005 3.229 2.746Zm-4.477 0c0 .775.363 1.469 1.248 1.469.884 0 1.247-.694 1.247-1.469 0-.785-.363-1.479-1.247-1.479-.885 0-1.247.694-1.247 1.48ZM8.867 8.358h1.738v4.628c0 2.153-1.108 2.848-3.347 2.848a6.833 6.833 0 0 1-2.12-.332l.095-1.429c.586.272 1.077.432 1.876.432 1.109 0 1.705-.492 1.705-1.519v-.282h-.021c-.458.615-1.098.896-1.865.896-1.524 0-2.473-1.086-2.473-2.636 0-1.56.778-2.726 2.505-2.726.82 0 1.481.422 1.886 1.066h.021v-.946ZM7.525 9.626c-.714 0-1.087.594-1.087 1.308 0 .814.511 1.278 1.087 1.278.682 0 1.226-.544 1.226-1.349 0-.584-.363-1.237-1.226-1.237Z"
                clipRule="evenodd"
              />
            </svg>
          </S.Icon>
          <Link size={LinkSize.xl} variant={LinkVariant.Primary} href="">
            Відгуки
            <Icon name={Icons.ArrowLeft} rotate={180} />
          </Link>
        </S.List>
      </div>
    </S.Section>
  );
};

export default Rate;
