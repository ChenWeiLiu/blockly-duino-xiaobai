# 小白積木 - 模組化架構說明

## 目錄結構

```
xiaobai/
├── src/                    # 原始碼目錄（模組化）
│   ├── hx711/             # HX711 稱重模組
│   │   ├── blocks.js      # 積木定義
│   │   ├── javascript.js  # 程式碼生成
│   │   ├── en.js          # 英文翻譯
│   │   ├── zh-hant.js     # 繁體中文翻譯
│   │   └── toolbox.xml    # 工具箱定義
│   └── esp32/             # ESP32 IO 模組
│       ├── blocks.js
│       ├── javascript.js
│       ├── en.js
│       ├── zh-hant.js
│       └── toolbox.xml
├── blocks.js              # 主檔案（自動載入所有模組）
├── javascript.js          # 主檔案（自動載入所有模組）
├── en.js                  # 主檔案（自動載入所有模組）
├── zh-hant.js             # 主檔案（自動載入所有模組）
├── toolbox.xml            # 合併後的工具箱
├── en_category.xml        # 英文分類翻譯
└── zh-hant_category.xml   # 繁體中文分類翻譯
```

## 如何開發

### 修改現有模組

1. 直接編輯 `src/hx711/` 或 `src/esp32/` 下的檔案
2. 重新載入應用程式即可看到變更（不需要建置）

### 新增新模組

1. 在 `src/` 下建立新資料夾，例如 `src/servo/`
2. 在新資料夾中建立以下檔案：
   - `blocks.js` - 積木定義
   - `javascript.js` - 程式碼生成
   - `en.js` - 英文翻譯
   - `zh-hant.js` - 繁體中文翻譯
   - `toolbox.xml` - 工具箱定義（只包含子分類）

3. 更新主目錄下的檔案：
   - 在 `blocks.js` 中加入：
     ```javascript
     document.write('<script src="customBlocks/xiaobai/src/servo/blocks.js"></script>');
     ```
   - 在 `javascript.js` 中加入：
     ```javascript
     document.write('<script src="customBlocks/xiaobai/src/servo/javascript.js"></script>');
     ```
   - 在 `en.js` 和 `zh-hant.js` 中加入對應的載入語句
   - 在 `toolbox.xml` 中加入新模組的分類

4. 更新 `en_category.xml` 和 `zh-hant_category.xml`，加入新分類的翻譯

## 優點

- ✅ **模組化**：每個功能獨立在自己的資料夾中
- ✅ **易於維護**：修改某個功能不會影響其他功能
- ✅ **無需建置**：直接修改即可，不需要執行 build.ps1
- ✅ **易於擴充**：新增功能只需建立新資料夾
- ✅ **不修改核心**：完全不需要修改 BlocklyDuino 的核心檔案

## 注意事項

- 所有檔案都使用 UTF-8 編碼
- `document.write` 必須在檔案載入時執行，不能在函式中使用
- 新增模組後記得更新 `toolbox.xml` 和分類翻譯檔案
