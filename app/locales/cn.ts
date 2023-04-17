import { SubmitKey } from "../store/app";

const cn = {
  WIP: "该功能仍在开发中……",
  Error: {
    Unauthorized: "现在是未授权状态，请在设置页填写授权码。",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} 条对话`,
  },
  Chat: {
    SubTitle: (count: number) => `您与 AIGPT 的 ${count} 条对话`,
    Actions: {
      ChatList: "查看消息列表",
      CompressedHistory: "查看压缩后的历史 Prompt",
      Export: "导出聊天记录",
      Copy: "复制",
      Stop: "停止",
      Retry: "重试",
    },
    Rename: "重命名对话",
    Typing: "正在输入…",
    Input: (submitKey: string) => {
      var inputHints = `输入消息，${submitKey} 发送`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += "，Shift + Enter 换行";
      }
      return inputHints;
    },
    Send: "发送",
  },
  Export: {
    Title: "导出聊天记录为 Markdown",
    Copy: "全部复制",
    Download: "下载文件",
  },
  Memory: {
    Title: "上下文记忆 Prompt",
    EmptyContent: "尚未记忆",
    Copy: "全部复制",
  },
  Home: {
    NewChat: "新的聊天主题",
    DeleteChat: "确认删除该对话吗？",
  },
  Settings: {
    Title: "设置",
    SubTitle: "自定义你的选项",
    Actions: {
      ClearAll: "清除所有的数据",
      ResetAll: "重置所有选项",
      Close: "关闭",
    },
    Lang: {
      Name: "Language",
      Options: {
        cn: "简体中文",
        en: "English",
        tw: "繁體中文",
        es: "Español",
      },
    },
    Avatar: "设置一个头像吧",
    FontSize: {
      Title: "字体大小",
      SubTitle: "聊天内容的字体大小",
    },

    Update: {
      Version: (x: string) => `当前版本：${x}`,
      IsLatest: "已是最新版本",
      CheckUpdate: "检查更新",
      IsChecking: "正在检查更新...",
      FoundUpdate: (x: string) => `发现新版本：${x}`,
      GoToUpdate: "前往更新",
    },
    SendKey: "发送键",
    Theme: "主题",
    TightBorder: "紧凑边框",
    Prompt: {
      Disable: {
        Title: "禁用提示词自动补全",
        SubTitle: "在输入框开头输入 / 即可触发自动补全",
      },
      List: "自定义提示词列表",
      ListCount: (builtin: number, custom: number) =>
        `内置 ${builtin} 条，用户定义 ${custom} 条`,
      Edit: "编辑",
    },
    HistoryCount: {
      Title: "附带历史消息数",
      SubTitle: "每次请求携带的历史消息数",
    },
    CompressThreshold: {
      Title: "历史消息长度压缩阈值",
      SubTitle: "当未压缩的历史消息超过该值时，将进行压缩",
    },
    Token: {
      Title: "API Key",
      SubTitle: "使用自己的API Key，速度会更快哦",
      Placeholder: "OpenAI API Key",
    },
    Usage: {
      Title: "账户余额",
      SubTitle(granted: any, used: any) {
        return `总共 $${granted}，已使用 $${used}`;
      },
      IsChecking: "正在检查…",
      Check: "重新检查",
    },
    AccessCode: {
      Title: "访问码",
      SubTitle: "现在是受控访问状态",
      Placeholder: "请输入访问码",
    },
    Model: "模型 (model)",
    Temperature: {
      Title: "随机性 (temperature)",
      SubTitle: "值越大，回复越随机",
    },
    MaxTokens: {
      Title: "单次回复限制 (max_tokens)",
      SubTitle: "单次交互所用的最大 Token 数",
    },
    PresencePenlty: {
      Title: "话题新鲜度 (presence_penalty)",
      SubTitle: "值越大，越有可能扩展到新话题",
    },
  },
  Store: {
    DefaultTopic: "主人，请向我提问吧",
    BotHello: "我是您的最佳AI助理，您可以问任何问题，比如“什么是修行？”，“人活着到底是过程重要还是结果重要？”，“如何理解金刚经中的：一切有为法，如梦幻泡影”",
    Error: "我是AIGPT，由于访问朋友太多，工程师正在紧急扩容服务器。冥想中...主人，请休息一下。",
    Prompt: {
      History: (content: string) =>
        "这是 AI 和用户的历史聊天总结作为前情提要：" + content,
      Topic:
        "使用四到五个字直接返回这句话的简要主题，不要解释、不要标点、不要语气词、不要多余文本，如果没有主题，请直接返回“闲聊”",
      Summarize:
        "简要总结一下你和用户的对话，用作后续的上下文提示 prompt，控制在 50 字以内",
    },
    ConfirmClearAll: "确认清除所有聊天、设置数据？",
  },
  Copy: {
    Success: "已写入剪切板",
    Failed: "复制失败，请赋予剪切板权限",
  },
};

export type LocaleType = typeof cn;

export default cn;
