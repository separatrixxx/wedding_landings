import type { Schema, Attribute } from '@strapi/strapi';

export interface AgendaAgenda extends Schema.Component {
  collectionName: 'components_agenda_agenda';
  info: {
    displayName: 'Agenda';
    icon: 'clock';
  };
  attributes: {
    time: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
  };
}

export interface BlocksBlocks extends Schema.Component {
  collectionName: 'components_blocks_blocks';
  info: {
    displayName: 'Blocks';
    icon: 'dashboard';
  };
  attributes: {
    timer: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
    questions: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    dressCode: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    agenda: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
    message: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    howToGet: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface DressCodeColors extends Schema.Component {
  collectionName: 'components_dress_code_colors';
  info: {
    displayName: 'Colors';
    icon: 'shirt';
  };
  attributes: {
    color: Attribute.String & Attribute.Required;
  };
}

export interface DressCodeDressCode extends Schema.Component {
  collectionName: 'components_dress_code_dress_codes';
  info: {
    displayName: 'DressCode';
    icon: 'shirt';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    colors: Attribute.Component<'dress-code.colors', true> & Attribute.Required;
  };
}

export interface HowToGetHowToGet extends Schema.Component {
  collectionName: 'components_how_to_get_how_to_gets';
  info: {
    displayName: 'HowToGet';
    icon: 'walk';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    text: Attribute.RichText & Attribute.Required;
  };
}

export interface QuestionsAnswers extends Schema.Component {
  collectionName: 'components_questions_answers';
  info: {
    displayName: 'Answers';
    icon: 'question';
  };
  attributes: {
    answer: Attribute.String & Attribute.Required;
    isTextArea: Attribute.Boolean & Attribute.DefaultTo<false>;
    isOnlyOne: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface QuestionsQuestions extends Schema.Component {
  collectionName: 'components_questions_questions';
  info: {
    displayName: 'Questions';
    icon: 'question';
    description: '';
  };
  attributes: {
    question: Attribute.String & Attribute.Required;
    answers: Attribute.Component<'questions.answers', true> &
      Attribute.Required;
  };
}

export interface StylesConfigColors extends Schema.Component {
  collectionName: 'components_styles_config_colors';
  info: {
    displayName: 'Colors';
    icon: 'star';
  };
  attributes: {
    dark: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'#171717'>;
    light: Attribute.String & Attribute.Required & Attribute.DefaultTo<'#FFF'>;
    textDark: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'#171717'>;
    textLight: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'#FFF'>;
    error: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'#FF1500'>;
    primaryMinimal: Attribute.String;
    backgroundMinimal: Attribute.String;
    primaryRomance: Attribute.String;
    backgroundRomance: Attribute.String;
    primaryPhoto: Attribute.String;
    backgroundPhoto: Attribute.String;
  };
}

export interface StylesConfigFonts extends Schema.Component {
  collectionName: 'components_styles_config_fonts';
  info: {
    displayName: 'Fonts';
    icon: 'star';
  };
  attributes: {
    fontCommon: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<"'Bad Script', sans-serif">;
    fontMinimal1: Attribute.String;
    fontMinimal2: Attribute.String;
    fontMinimal3: Attribute.String;
    fontRomance1: Attribute.String;
    fontRomance2: Attribute.String;
    fontRomance3: Attribute.String;
    fontPhoto1: Attribute.String;
    fontPhoto2: Attribute.String;
    fontPhoto3: Attribute.String;
  };
}

export interface StylesConfigStylesConfig extends Schema.Component {
  collectionName: 'components_styles_config_styles_configs';
  info: {
    displayName: 'StylesConfig';
    icon: 'star';
    description: '';
  };
  attributes: {
    colors: Attribute.Component<'styles-config.colors'> & Attribute.Required;
    fonts: Attribute.Component<'styles-config.fonts'> & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'agenda.agenda': AgendaAgenda;
      'blocks.blocks': BlocksBlocks;
      'dress-code.colors': DressCodeColors;
      'dress-code.dress-code': DressCodeDressCode;
      'how-to-get.how-to-get': HowToGetHowToGet;
      'questions.answers': QuestionsAnswers;
      'questions.questions': QuestionsQuestions;
      'styles-config.colors': StylesConfigColors;
      'styles-config.fonts': StylesConfigFonts;
      'styles-config.styles-config': StylesConfigStylesConfig;
    }
  }
}
