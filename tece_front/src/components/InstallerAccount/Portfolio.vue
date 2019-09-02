<template>
  <div class="installer-portfolio row flex-wrap">
    <div class="header flex between-xs middle-xs w-100">
      <h2 class="metronic">Портфолио</h2>
      <span>ID {{ user.id}}</span>
    </div>
    <div class="common_info w-100">
      <div class="row between-xs">
        <div class="col-xs-7 common_info_block">
          <div class="inner">
            <div class="inner_header metronic weight-700">{{ user.name }}</div>
            <div class="row">
              <div class="col-xs-4 flex flex-wrap main_info">
                <div class="user_img block">
                  <img src="../../assets/image/installer_account/avatar.jpg" :alt=" user.name" width="152" height="152">
                </div>
                <div class="user_social flex w-100 between-xs">
                  <a :href="user.social_links[0].link" :title="user.social_links[0].name">
                    <svg class="link-icon" width="38" height="38" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <mask id="path-1-inside-1" fill="white">
                        <path d="M20 10C20 4.47726 15.5227 0 10 0C4.47726 0 0 4.47726 0 10C0 15.5227 4.47726 20 10 20C15.5227 20 20 15.5227 20 10ZM0.909085 10C0.909085 4.97909 4.97909 0.909085 10 0.909085C15.0209 0.909085 19.0909 4.97909 19.0909 10C19.0909 15.0209 15.0209 19 10 19C4.97908 19 0.909085 15.0209 0.909085 10Z"/>
                      </mask>
                      <path d="M21 10C21 3.92497 16.075 -1 10 -1V1C14.9704 1 19 5.02954 19 10H21ZM10 -1C3.92497 -1 -1 3.92497 -1 10H1C1 5.02954 5.02954 1 10 1V-1ZM-1 10C-1 16.075 3.92497 21 10 21V19C5.02954 19 1 14.9704 1 10H-1ZM10 21C16.075 21 21 16.075 21 10H19C19 14.9704 14.9704 19 10 19V21ZM1.90909 10C1.90909 5.53137 5.53137 1.90909 10 1.90909V-0.090915C4.4268 -0.090915 -0.090915 4.4268 -0.090915 10H1.90909ZM10 1.90909C14.4686 1.90909 18.0909 5.53137 18.0909 10H20.0909C20.0909 4.4268 15.5732 -0.090915 10 -0.090915V1.90909ZM18.0909 10C18.0909 14.4556 14.4818 18 10 18V20C15.56 20 20.0909 15.5863 20.0909 10H18.0909ZM10 18C5.51821 18 1.90909 14.4556 1.90909 10H-0.090915C-0.090915 15.5863 4.43996 20 10 20V18Z" fill="#002554" mask="url(#path-1-inside-1)"/>
                      <path d="M10.3836 15.7718V9.99998H12.2881L12.5891 8.08727H10.3836V7.12819C10.3836 6.6291 10.5472 6.15273 11.2636 6.15273H12.6954V4.24364H10.6627C8.95362 4.24364 8.48725 5.36907 8.48725 6.9291V8.08639H7.31454V9.99998H8.48725V15.7718H10.3836Z" fill="#002554"/>
                    </svg>
                  </a>
                  <a :href="user.social_links[1].link" :title="user.social_links[1].name">
                    <svg class="link-icon" width="38" height="38" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 0C4.47721 0 0 4.47721 0 10C0 15.5228 4.47721 20 10 20C15.5228 20 20 15.5228 20 10C19.9938 4.47982 15.5202 0.00618492 10 0ZM10 19C4.84538 19 1 15.1546 1 10C1 4.84538 4.84538 1 10 1C15.1546 1 19 4.84538 19 10C18.9941 15.1522 15.1522 18.9941 10 19Z" fill="#002554"/>
                      <path d="M14.3333 4H5.66667C4.74658 4.00114 4.00114 4.74658 4 5.66667V14.3333C4.00114 15.2534 4.74658 15.9989 5.66667 16H14.3333C15.2534 15.9989 15.9989 15.2534 16 14.3333V5.66667C15.9989 4.74658 15.2534 4.00114 14.3333 4ZM15.3333 14.3333C15.3333 14.8856 14.8856 15.3333 14.3333 15.3333H5.66667C5.11442 15.3333 4.66667 14.8856 4.66667 14.3333V5.66667C4.66667 5.11442 5.11442 4.66667 5.66667 4.66667H14.3333C14.8856 4.66667 15.3333 5.11442 15.3333 5.66667V14.3333Z" fill="#002554"/>
                      <path d="M10 6.66667C8.15902 6.66667 6.66667 8.15902 6.66667 10C6.66667 11.841 8.15902 13.3333 10 13.3333C11.841 13.3333 13.3333 11.841 13.3333 10C13.3314 8.15983 11.8402 6.66862 10 6.66667ZM10 12.6667C8.52718 12.6667 7.33333 11.4728 7.33333 10C7.33333 8.52718 8.52718 7.33333 10 7.33333C11.4728 7.33333 12.6667 8.52718 12.6667 10C12.665 11.472 11.472 12.665 10 12.6667Z" fill="#002554"/>
                      <path d="M13.6667 5.33333C13.1144 5.33333 12.6667 5.78109 12.6667 6.33333C12.6667 6.88558 13.1144 7.33333 13.6667 7.33333C14.2189 7.33333 14.6667 6.88558 14.6667 6.33333C14.6667 5.78109 14.2189 5.33333 13.6667 5.33333ZM13.6667 6.66667C13.4826 6.66667 13.3333 6.51742 13.3333 6.33333C13.3333 6.14925 13.4826 6 13.6667 6C13.8507 6 14 6.14925 14 6.33333C14 6.51742 13.8507 6.66667 13.6667 6.66667Z" fill="#002554"/>
                    </svg>
                  </a>
                  <a :href="user.social_links[2].link" :title="user.social_links[2].name">
                    <svg class="link-icon" width="38" height="38" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path class="icon-stroke" d="M19.5 10C19.5 15.2467 15.2467 19.5 10 19.5C4.75329 19.5 0.5 15.2467 0.5 10C0.5 4.75329 4.75329 0.5 10 0.5C15.2467 0.5 19.5 4.75329 19.5 10Z" stroke="#002554"/>
                      <path d="M14.7048 11.6422L14.6983 11.6362C14.5959 11.5433 14.282 11.2432 14.1762 11.1121C14.0519 10.9485 14.0806 10.8413 14.1737 10.6806C14.2914 10.4776 14.5271 10.1662 14.7766 9.83648C15.5757 8.7807 16.0916 8.0498 15.9854 7.53063L15.9281 7.25332L12.9771 7.25458C12.9668 7.28193 12.8128 7.94654 12.1629 9.07824C11.6917 9.89882 11.3826 10.1566 11.2738 10.2021L11.2569 10.1971C11.2215 10.1541 11.1596 10.0381 11.1342 9.73898C11.1076 9.4257 11.1311 9.0464 11.1539 8.6796C11.1806 8.24948 11.2036 7.878 11.1485 7.61221L11.0589 7.17921C10.9506 7.16221 10.5541 7.01191 9.44931 7.00048C8.49286 6.99086 8.21188 7.12659 8.07391 7.24622L7.61752 7.64189L8.1944 7.83258C8.41394 7.90516 8.48682 7.9889 8.5466 8.404C8.5856 8.67456 8.60602 9.12924 8.5639 9.53517C8.50339 10.1172 8.35828 10.2255 8.35077 10.2313C8.32578 10.2229 8.11383 10.1318 7.74588 9.36751C7.49063 8.83745 7.26688 8.21044 7.10336 7.75261C6.91623 7.22832 6.94992 7.33994 6.85498 7.09223L4 7.09214L4.18475 7.56166C4.95499 9.52095 5.66168 11.051 6.60742 12.15C7.65231 13.3642 8.9509 13.9999 10.7001 13.9999H11.0517V13.6545C11.0517 13.3316 11.0789 13.0991 11.1372 12.9228C11.1728 12.8154 11.2201 12.7266 11.2698 12.6335C11.3436 12.4965 11.4158 12.4377 11.4551 12.429C11.4908 12.421 11.5536 12.4467 11.6232 12.4977C11.823 12.6441 11.9816 12.8364 12.1495 13.04C12.3917 13.3339 12.6422 13.6376 13.0396 13.8365C13.2568 13.9451 13.6549 14 13.874 14C13.9319 14 15.9974 13.9999 16 13.9999L15.9849 13.6403C15.9624 13.1026 15.5316 12.4303 14.7048 11.6422V11.6422ZM13.8876 13.3091H13.8819C13.7309 13.3116 13.4426 13.2629 13.3587 13.221C13.0945 13.0888 12.9098 12.8647 12.6959 12.6053C12.5081 12.3775 12.3139 12.1419 12.0435 11.9439C11.8249 11.7837 11.6263 11.7369 11.4687 11.7369C11.4057 11.7369 11.3491 11.7443 11.3006 11.7551C11.1176 11.7956 10.8558 11.9249 10.6477 12.3116C10.5891 12.4216 10.5225 12.5462 10.4686 12.7092C10.4121 12.8797 10.3769 13.0692 10.3602 13.2998C9.04199 13.2262 8.0134 12.7139 7.14438 11.704C6.33643 10.7651 5.70078 9.45179 5.02759 7.78266C5.07629 7.78266 6.29678 7.78284 6.36884 7.78284C6.3909 7.84373 6.4147 7.91047 6.43997 7.98117C6.61621 8.47506 6.85764 9.15137 7.14209 9.7281C7.54941 10.554 7.92139 10.9223 8.34811 10.9223C8.56116 10.9223 8.75223 10.8336 8.90063 10.6657C9.11221 10.4264 9.23508 10.0313 9.27628 9.4579C9.30878 9.00574 9.27856 8.55538 9.24286 8.30722C9.21338 8.10304 9.17136 7.8887 9.06882 7.69667C9.5058 7.67733 10.0909 7.70791 10.4616 7.76017C10.4953 7.94042 10.4733 8.29472 10.4521 8.6375C10.4007 9.46555 10.3477 10.32 10.7939 10.7198C10.8723 10.7902 10.9555 10.8279 10.9579 10.8294L11.185 10.8978C11.2726 10.8713 11.7801 11.1242 12.741 9.4767C13.0489 8.94881 13.3355 8.3405 13.4899 7.94321C13.8479 7.94249 15.0674 7.94384 15.2107 7.94402C15.0078 8.38287 14.5267 9.0088 14.2123 9.42426C13.9382 9.78638 13.7016 10.0991 13.5627 10.3387C13.3047 10.7839 13.3481 11.1806 13.6168 11.5306L13.621 11.536C13.771 11.7236 14.1413 12.0707 14.2181 12.1407C14.7746 12.6715 15.0427 13.0528 15.1703 13.309H13.8876V13.3091Z" fill="#002554"/>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="col-xs-8">
                <div class="description_fields w-100">
                  <div class="field_label uppercase">Категория</div>
                  <div class="field_text">{{ user.category }}</div>
                </div>
                <div class="description_fields w-100">
                  <div class="field_label uppercase">Компания</div>
                  <div class="field_text">{{ user.company }}</div>
                </div>
                <div class="description_fields w-100">
                  <div class="field_label uppercase">Область/регион</div>
                  <div class="field_text">{{ user.region }}</div>
                </div>
                <div class="description_fields w-100">
                  <div class="field_label uppercase">Город/нас. пункт</div>
                  <div class="field_text">{{ user.city }}</div>
                </div>
                <div class="description_fields w-100">
                  <div class="field_label uppercase">Опыт работы. О себе</div>
                  <div class="field_text about">{{ user.about }}</div>
                </div>
                <div class="description_fields w-100 since">
                  <div class="field_label uppercase">На сайте</div>
                  <div class="field_text">{{ user.since_registration }}</div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div class="col-xs-5 common_info_block">
          <div class="inner">
            <div class="inner_header metronic weight-700">Специализации</div>
            <div class="specialization-item" v-for="(skill, index) in user.specialization" :key="index">
              <div :class="{ 'is_tece' : skill.is_tece}">{{ skill.skill }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row w-100">
      <div class="col-xs-12 objects_info">
        <div class="inner">
          <div class="inner_header metronic weight-700 flex flex-wrap">Мои объекты</div>

          <draggable
            class="list-group"
            v-model="user.objects"
            v-bind="dragOptions"
            @start="drag = true"
            @end="drag = false"
          >
            <transition-group type="transition" :name="!drag ? 'flip-list' : null" class="list-transition">
              <installer-object class="user_objects list-group-item" v-for="(user_object, index) in user.objects" :key="index" :user="user_object"/>
            </transition-group>
          </draggable>

          <div class="total row metronic weight-700 end-xs">
            Всего объектов: 6
          </div>
        </div>
      </div>
      <div class="col-xs-12 flex between-xs">
        <div class="share-block flex">
          <button class="btn btn-dark-blue btn-share" title="Поделиться" @click="isOpenShare = !isOpenShare" :class="{'btn-share__opened': isOpenShare}"/>
          <div class="btn-block flex" v-show="isOpenShare">
            <a href="https://instagram.com" class="share_link insta block" title="Instagram"></a>
            <a href="https://telegram.org" class="share_link tg block" title="Telegram"></a>
            <a href="https://vk.com" class="share_link vk block" title="vkontakte"></a>
            <a href="https://whatsapp.com" class="share_link wa block" title="WhatsApp"></a>
          </div>
        </div>
        <div class="btn btn-dark-blue btn-send-bid center-xs">Отправить заявку</div>
      </div>
    </div>
  </div>
</template>

<script>
import User from "../../resource/installer-user.json";
import InstallerObject from "./InstallerObject";
import Draggable from "vuedraggable";

export default {
  name: "Portfolio",
  data() {
    return {
      user: User,
      isOpenShare: false,
      drag: false
    }
  },
  components: {
    InstallerObject,
    Draggable
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../css/variables/variables";

.installer-portfolio {
  height: 100%;
  background-color: $gray5;
  padding: 40px 24px;
  align-content: flex-start;
  .header h2 {
    color: $dark-blue;
    font-size: 30px;
    margin-top: 0;
    margin-bottom: 24px;
  }
  .common_info {
    margin-bottom: 16px;
  }
  .inner {
    padding: 40px 40px 16px;
    background-color: $white;
  }
  .main_info {
    align-content: flex-start;
  }
  .inner_header {
    font-size: 20px;
    color: $dark-blue;
    margin-bottom: 24px;
  }
  .user_img {
    margin-bottom: 18px;
  }
  .user_social {
    max-width: 152px;
  }
  .link-icon:hover {
    path:not(.icon-stroke) {
      fill: $gray6;
    }
    .icon-stroke {
      stroke: $gray6;
    }
  }
  .description_fields {
    border: 1px solid $gray7;
    margin-bottom: 8px;
    padding: 8px 16px;
  }
  .field_label {
    font-size: 8px;
    color: $gray1;
    letter-spacing: 0.1em;
  }
  .field_text {
    font-size: 14px;
    line-height: 22px;
  }
  .about {
    min-height: 168px;
  }
  .since {
    background-color: $gray5;
    margin-bottom: 80px;
  }
  .specialization-item {
    font-size: 16px;
    margin-bottom: 24px;
  }
  .is_tece {
    background: transparent url("../../assets/tece_logo_2.svg") 100% 50% no-repeat;
  }
  .user_objects {
    width: 32%;
    margin-bottom: 16px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    &:nth-child(3n-1) {
      margin-left: 16px;
      margin-right: 16px;
    }
  }
  .total {
    font-size: 20px;
    color: $dark-blue;
  }
  .objects_info {
    margin-bottom: 24px;
  }
  .btn-share {
    width: 46px;
    height: 46px;
    background: $dark-blue url("../../assets/image/icons/share_closed.svg") 50% 50% no-repeat;
    margin-right: 24px;

    &:hover {
      background-color: $gray6;
      background-image: url("../../assets/image/icons/share_hover.svg");
    }
    &.btn-share__opened {
      background-color: transparent;
      background-image: url("../../assets/image/icons/share.svg");
    }
  }
  .share_link {
    width: 46px;
    height: 46px;
    margin-right: 16px;
    background-color: transparent;
    &:hover {
      background-color: $gray6;
    }
  }

  .insta {
    background-image: url("../../assets/image/icons/instagram.svg");
    &:hover {
      background-image: url("../../assets/image/icons/instagram_hover.svg");
    }
  }
  .tg {
    background-image: url("../../assets/image/icons/telegram.svg");
    &:hover {
      background-image: url("../../assets/image/icons/telegram_hover.svg");
    }
  }
  .vk {
    background-image: url("../../assets/image/icons/vk.svg");
    &:hover {
      background-image: url("../../assets/image/icons/vk_hover.svg");
    }
  }
  .wa {
    background-image: url("../../assets/image/icons/whatsapp.svg");
    &:hover {
      background-image: url("../../assets/image/icons/whatsapp_hover.svg");
    }
  }
  .btn-send-bid {
    width: 217px;
  }
  //transition-block
  .list-transition {
    display: flex;
    flex-wrap: wrap;
  }
  .flip-list-move {
    transition: transform 0.5s;
  }
  .no-move {
    transition: transform 0s;
  }
  .ghost {
    opacity: 0.5;
    background: #c8ebfb;
  }
  .list-group {
    min-height: 20px;
  }
  .list-group-item {
    cursor: pointer;
  }
  //transition-block
}
</style>
