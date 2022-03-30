import { HashtagIcon, UserIcon } from "@heroicons/react/solid";
import {
  HomeIcon,
  MailIcon,
  BellIcon,
  BookmarkIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
} from "@heroicons/react/outline";

import Button from "../Button/Button";

const MenuBar = () => {
  return (
    <section className="hidden vsm:flex flex-col justify-between sticky top-0 left-0 pt-[9px] pr-[19px] pb-5 max-h-screen "> {/* aside tag */}

      <div>
        {/* Logo */}
        <div className="containerIcon">
          <HomeIcon className="iconMenuBar" /> 
          <span>Página Inicial</span>
        </div>
        <div className="containerIcon">
          <HashtagIcon className="iconMenuBar" />
          <span>Explorar</span>
        </div>
        <div className="containerIcon">
          <BellIcon className="iconMenuBar" />
          <span>Notificações</span>
        </div>
        <div className="containerIcon">
          <MailIcon className="iconMenuBar" />
          <span>Mensagens</span>
        </div>
        <div className="containerIcon">
          <BookmarkIcon className="iconMenuBar" />
          <span>Itens salvos</span>
        </div>
        <div className="containerIcon">
          <CollectionIcon className="iconMenuBar" />
          <span>Listas</span>
        </div>
        <div className="containerIcon font-bold	">
          <UserIcon className="iconMenuBar" />
          <span>Perfil</span>
        </div>
        <div className="containerIcon">
          <DotsCircleHorizontalIcon className="iconMenuBar" />
          <span>Mais</span>
        </div>

      </div>

        <Button outlined={false} children="Tweetar" />

    </section>
  );
};

export default MenuBar;
