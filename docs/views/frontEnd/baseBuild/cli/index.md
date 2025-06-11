## 脚手架发布项目模板的时候，package.json里面的files文件的作用？
:::info
files 字段是一个数组，用于定义当你的 npm 包被发布时，哪些文件应该被包含进发布的包中。
只有列在 files 数组中的文件或目录（以及它们的子目录）会被包括在内。
如果你不指定 files 字段，npm 会默认包含所有文件，除了那些被 .gitignore 或 .npmignore 文件排除的
:::