<p align="center">
  <img src="logo/tv-roe-logo-128.png" width="96" height="96" alt="TV 槓桿 ROE">
</p>

<h1 align="center">TV 槓桿 ROE</h1>

<p align="center">
  讓 TradingView 圖表上的 Gate 持倉標籤直接顯示「槓桿倍數 + 含槓桿收益率」，並隱藏帳戶資金，專為直播設計。<br>
  BY 藍夜
</p>

<p align="center">
  <a href="https://raw.githubusercontent.com/vito20051124/TV_ROE-/main/tv-leveraged-roe.user.js"><b>👉 一鍵安裝</b></a>
</p>

---

## 功能

TradingView 連接 Gate 後，圖表上的持倉標籤原本顯示「持倉數量」和「未乘槓桿的漲跌幅」。安裝本腳本後會變成：

| 原本 | 安裝後 |
|---|---|
| `-24` &#124; `-0.17%` | `200x` &#124; `-34.00%` |

- **左格顯示實際槓桿**：取代持倉數量，不會洩漏倉位大小。
- **右格顯示含槓桿收益率（ROE%）**：每秒更新，賺綠賠紅。
- **不需打開 Gate 交易面板**：倉位直接從 TradingView 讀取，價格來自 Gate 公開行情。
- **自動貼合原生標籤大小**：拖曳、縮放圖表時同步移動；滑鼠點擊會穿透到原生標籤，平倉、反向等操作照常可用。
- **隱藏帳戶資金**：自動遮住下方帳戶列的餘額，按 `Alt + P` 可以開關。
- **只處理 Gate 倉位**：其他券商或 TradingView 模擬交易不受影響。

## 安裝

### 1. 安裝 Tampermonkey

到 Chrome 線上應用程式商店安裝 [Tampermonkey](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)。Edge 使用者請在 Edge 外掛程式商店搜尋 Tampermonkey。

### 2. 允許使用者指令碼（很重要）

新版 Chrome 預設會擋住使用者腳本，不開這項的話腳本不會執行：

1. 網址列輸入 `chrome://extensions` 並按 Enter。
2. 找到 Tampermonkey，點「詳細資料」。
3. 開啟「**允許使用者指令碼**」。

> 如果找不到這個選項，代表 Chrome 版本較舊，請改為開啟擴充功能頁右上角的「**開發人員模式**」。

### 3. 安裝腳本

點這個連結：**[安裝 TV 槓桿 ROE](https://raw.githubusercontent.com/vito20051124/TV_ROE-/main/tv-leveraged-roe.user.js)**

Tampermonkey 會跳出安裝畫面，按「**安裝**」即可。

### 4. 開始使用

1. 打開 TradingView 圖表頁，網址需要是 `tradingview.com/chart/...`。
2. 在下方交易面板連接 Gate 帳戶。
3. 開倉後，圖表上的持倉標籤就會顯示槓桿和 ROE%。

## 使用說明

| 操作 | 說明 |
|---|---|
| `Alt + P` | 開關下方帳戶資訊遮罩 |
| 切換幣種 | 自動顯示該幣種的倉位 |
| 多筆倉位 | 每筆倉位各自顯示自己的槓桿和收益率 |

### 進階設定

在 Tampermonkey 編輯腳本，最上方的 `CFG` 可以調整：

| 設定 | 預設 | 說明 |
|---|---|---|
| `leverageMode` | `'actual'` | `'actual'`：使用倉位實際槓桿；`'max'`：一律使用 Gate 該合約的最高槓桿 |
| `maskAccountPanel` | `true` | 開啟頁面時是否自動遮住帳戶資訊 |

> 注意：自行修改設定後，腳本自動更新時可能會覆蓋你的修改。

## 更新

Tampermonkey 會自動檢查並更新到最新版本。想立即更新的話：Tampermonkey 管理面板 → 勾選本腳本 → 「檢查更新」。

## 計算方式

```
多單 ROE% = (標記價格 − 開倉均價) ÷ 開倉均價 × 槓桿 × 100
空單 ROE% = (開倉均價 − 標記價格) ÷ 開倉均價 × 槓桿 × 100
```

- 標記價格每秒從 Gate 公開 API 取得。
- 這是**估算值**，沒有扣除手續費和資金費率，可能和 Gate App 顯示的數字有些微差距。

## 已知限制

- 只支援 **Gate 的 USDT 永續合約**。
- 只支援**單一圖表**版面，多圖表分割畫面可能對不到正確的圖。
- 座標使用「百分比」或「指數化」模式時不會顯示，原生標籤會露出。一般座標可正常使用；對數座標已支援，但尚未完整測試。
- 主要在**深色主題**下測試。
- Gate「統一帳戶」尚未測試，建議先用小倉位對照 Gate App 的收益率。
- 讀取倉位使用 TradingView 的非公開介面，TradingView 改版後可能失效。失效時覆蓋標籤會直接消失，**不會顯示錯誤的數字**。

## 常見問題

**裝了沒有反應？**
1. 確認第 2 步的「允許使用者指令碼」已開啟。
2. 確認 Tampermonkey 裡本腳本是啟用狀態。
3. 確認網址是 `tradingview.com/chart/...`，然後重新整理頁面。

**標籤邊緣露出一點原生標籤？**
請到 [Issues](https://github.com/vito20051124/TV_ROE-/issues) 回報，並附上截圖和瀏覽器縮放比例。

## 隱私

- 腳本只在你自己的瀏覽器中執行，**不會收集或上傳任何帳戶資料**。
- 唯一的對外連線是 Gate 公開行情 API（`api.gateio.ws`），只用來查詢合約的最高槓桿和標記價格，不需要也不會使用你的帳號或 API 金鑰。

---

<p align="center">BY 藍夜</p>
