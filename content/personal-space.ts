import { musicVideosEn, musicVideosZh } from "./music-videos";
import { projectsForLocale } from "./projects";

export const personalSpaceZh = {
  ui: { home: "主页", language: "中文 / EN", photoSlot: "照片位置", flow: ["发现", "构建", "迭代"] },
  navigation: [
    { label: "探索", href: "/explore" },
    { label: "职业", href: "/career" },
    { label: "项目", href: "/projects" },
    { label: "生活", href: "/life" },
  ],
  projects: { eyebrow: "项目", title: "项目与构建", lead: "把想法变成实际的工作，再记录其中的方法、贡献与取舍。", items: projectsForLocale("zh") },
  life: {
    eyebrow: "个人生活档案",
    title: "生活",
    lead: "我始终认为，生活与学习、工作应该保持平衡。忙碌之外，生活给予我恢复能量的空间，也让我在不同的体验中发现新的乐趣。无论是棋盘上的思考、运动中的挑战，还是音乐中的表达，这些经历让我保持好奇，更加享受探索世界的过程。",
    archive: [
      { slug: "campus", title: "校园", label: "校园生活", intro: "一段关于学习、社区与日常校园片段的记录。" },
      { slug: "football", title: "Football", label: "足球与运动", intro: "一段关于团队、挑战与持续投入的记录。" },
      { slug: "chess", title: "国际象棋", label: "棋类经历", intro: "一段关于思考、专注、策略与长期训练的记录。" },
      { slug: "music", title: "音乐", label: "创造与表达", intro: "音乐是我探索创造力与表达方式的一部分。在学习和工作之外，音乐让我保持平衡，也让我从不同角度感受世界。" },
      { slug: "travel", title: "旅行", label: "探索不同环境", intro: "一段关于走进不同环境、保持开放与发现新视角的记录。" },
      { slug: "everyday", title: "日常", label: "照片记录", intro: "一段关于平凡日子里值得留下的照片与记忆的记录。" },
    ],
    galleryLabel: "照片墙",
    galleryNote: "照片位置，等待未来的生活片段。",
    musicArchive: {
      number: "04",
      label: "创造与表达",
      featuredLabel: "精选影像",
      galleryLabel: "音乐影像",
      note: "四段现场音乐记录，收藏舞台、旋律与情绪。",
      emptyLabel: "等待视频收录",
      playLabel: "播放",
      fullscreenLabel: "全屏播放",
      closeLabel: "关闭播放器",
      videos: musicVideosZh,
    },
  },
} as const;

export const personalSpaceEn = {
  ui: { home: "Home", language: "中文 / EN", photoSlot: "Photo slot", flow: ["Discover", "Build", "Iterate"] },
  navigation: [
    { label: "Explore", href: "/en/explore" },
    { label: "Career", href: "/en/career" },
    { label: "Projects", href: "/en/projects" },
    { label: "Life", href: "/en/life" },
  ],
  projects: { eyebrow: "Projects", title: "Projects & Builds", lead: "Work across AI products, computer vision, and quantitative modeling—with the methods and contributions behind each project.", items: projectsForLocale("en") },
  life: {
    eyebrow: "Personal Life Archive",
    title: "Life",
    lead: "I believe life should stay in balance with study and work. Beyond busy days, it offers space to recharge and discover new interests. Whether through thought on the chessboard, challenge in sport, or expression in music, these experiences keep me curious and open to the world.",
    archive: [
      { slug: "campus", title: "Campus", label: "Campus Life", intro: "A record of learning, community, and everyday campus moments." },
      { slug: "football", title: "Football", label: "Football & Sports", intro: "A record of teamwork, challenge, and steady commitment." },
      { slug: "chess", title: "Chess", label: "Chess", intro: "A record of thought, focus, strategy, and long-term training." },
      { slug: "music", title: "Music", label: "Creation & Expression", intro: "Music is a way for me to explore creativity and self-expression. Beyond my academic and professional life, music helps me maintain balance and experience the world from different perspectives." },
      { slug: "travel", title: "Travel", label: "Travel", intro: "A record of new environments, open-mindedness, and fresh perspectives." },
      { slug: "everyday", title: "Daily", label: "Everyday Moments", intro: "A record of the photos and memories worth keeping from ordinary days." },
    ],
    galleryLabel: "Gallery",
    galleryNote: "Photo placeholders for future moments.",
    musicArchive: {
      number: "04",
      label: "Creation & Expression",
      featuredLabel: "Featured Video",
      galleryLabel: "Video Gallery",
      note: "Four live music moments, preserving the stage, melody, and atmosphere.",
      emptyLabel: "Awaiting video",
      playLabel: "Play",
      fullscreenLabel: "Fullscreen",
      closeLabel: "Close player",
      videos: musicVideosEn,
    },
  },
} as const;
