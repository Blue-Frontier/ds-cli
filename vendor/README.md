# 说明：本地尚未执行 git submodule add（远程仓库可能尚未创建）。
# 在 Blue-Frontier/ds-cli 创建并 push 后，于仓库根目录执行：
#
#   git submodule add https://github.com/Blue-Frontier/ds-core.git vendor/ds-core
#   git submodule absorbgitdirs   # 可选
#   # 按发布 tag 检出：
#   git -C vendor/ds-core checkout <tag>
#   git add .gitmodules vendor/ds-core
#
# 推荐 .gitmodules 内容：
#
# [submodule "vendor/ds-core"]
# 	path = vendor/ds-core
# 	url = https://github.com/Blue-Frontier/ds-core.git
