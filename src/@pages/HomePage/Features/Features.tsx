import { Link } from "@/components/Link";
import { LinkSize, LinkVariant } from "@/components/Link/Link";
import { Icon } from "@/shared/ui/icon";
import { Icons } from "@/shared/ui/icons";
import { FC } from "react";
import CircleIcon from "./CircleIcon";
import * as S from "./Features.styled";

const Features: FC = () => {
  return (
    <S.Section>
      <div className="container">
        <S.Title className="title">
          <span>
            Усе під рукою.
            <CircleIcon />
          </span>{" "}
          Багато можливостей для налаштування вашого закладу
        </S.Title>

        <S.List>
          <S.Card>
            <S.Image href="#">
              <img src="images/content/booking/booking-2x.png" alt="" />
            </S.Image>

            <div>
              <S.Subtitle>
                <Icon name={Icons.AlarmIcon} size={28} />
                Резервації столів
              </S.Subtitle>

              <S.Text>
                <p>Легкий резерв столу через лінк у соцмережах або на сайті</p>
              </S.Text>
            </div>

            <Link
              size={LinkSize.primaryXl}
              variant={LinkVariant.Primary}
              href="/booking"
            >
              Детальніше
              <Icon name={Icons.ArrowUp} rotate={90} />
            </Link>
          </S.Card>
          <S.Card>
            <S.Image href="#">
              <img src="images/content/reviews/reviews-2x.png" alt="" />
            </S.Image>

            <div>
              <S.Subtitle>
                <Icon name={Icons.HeartsIcon} size={28} />
                Відгуки
              </S.Subtitle>

              <S.Text>
                <p>Відгуки у реальному часі від ваших клєнтів</p>
              </S.Text>
            </div>

            <Link
              size={LinkSize.primaryXl}
              variant={LinkVariant.Primary}
              href="/reviews"
            >
              Детальніше
              <Icon name={Icons.ArrowUp} rotate={90} />
            </Link>
          </S.Card>
          <S.Card>
            <S.Image href="#">
              <img src="images/content/admin/admin-2x.png" alt="" />
            </S.Image>

            <div>
              <S.Subtitle>
                <Icon name={Icons.LayersIcon} />
                Адмін. панель
              </S.Subtitle>

              <S.Text>
                <p>Легка для праці та розуміння панель налаштування закладу</p>
              </S.Text>
            </div>

            <Link
              size={LinkSize.primaryXl}
              variant={LinkVariant.Primary}
              href="/admin"
            >
              Детальніше
              <Icon name={Icons.ArrowUp} rotate={90} />
            </Link>
          </S.Card>
        </S.List>
      </div>
    </S.Section>
  );
};

export default Features;
