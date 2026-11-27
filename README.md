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

- **Chrome**：[Chrome 線上應用程式商店 - Tampermonkey](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
- **Edge**：[Edge 外掛程式商店 - Tampermonkey](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)

### 2. 允許使用者指令碼（⚠️ 最重要，每台電腦都要設定）

瀏覽器預設會擋住使用者腳本，**沒開這項的話腳本完全不會執行**。這個設定是每台電腦、每個瀏覽器分開的，**換電腦或換瀏覽器都要重新設定一次**。

**Chrome**

1. 網址列輸入 `chrome://extensions` 並按 Enter。
2. 找到 Tampermonkey，點「詳細資料」。
3. 開啟「**允許使用者指令碼**」。

> 找不到這個選項的話，代表 Chrome 版本較舊，請改為開啟擴充功能頁右上角的「**開發人員模式**」。

**Edge**

1. 網址列輸入 `edge://extensions` 並按 Enter。
2. 開啟**左側欄**的「**開發人員模式**」。
3. 點 Tampermonkey 的「詳細資料」，如果有「**允許使用者指令碼**」也一併開啟。

設定完成後，重新整理 TradingView 頁面。

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

與 Gate 的收益率定義一致：

```
ROE% = 未實現盈虧 ÷ 倉位保證金 × 100

未實現盈虧 = (標記價格 − 開倉均價) × 張數 × 合約乘數   （空單正負相反）
倉位保證金 = 倉位價值 ÷ 槓桿 + 預估平倉手續費          （由 Gate 提供）
```

- 標記價格每秒從 Gate 公開 API 取得，比 TradingView 轉送的價格更即時。
- 倉位保證金直接使用 Gate 回傳的數值，已包含預估平倉手續費。高槓桿時這筆手續費佔比很大（200x 約 15%），如果只用「價差 × 槓桿」計算，收益率會明顯偏高。
- 價格每秒更新一次，行情劇烈波動時可能和 Gate App 有短暫的些微差距。

## 已知限制

- 只支援 **Gate 的 USDT 永續合約**。
- 只支援**單一圖表**版面，多圖表分割畫面可能對不到正確的圖。
- 座標使用「百分比」或「指數化」模式時不會顯示，原生標籤會露出。一般座標可正常使用；對數座標已支援，但尚未完整測試。
- 主要在**深色主題**下測試。
- Gate「統一帳戶」尚未測試，建議先用小倉位對照 Gate App 的收益率。
- 讀取倉位使用 TradingView 的非公開介面，TradingView 改版後可能失效。失效時覆蓋標籤會直接消失，**不會顯示錯誤的數字**。

## 常見問題

**裝了沒有反應？**

先確認腳本有沒有執行：在 TradingView 圖表頁按 `F12`，切到「Console（主控台）」，找找看有沒有藍色的「**TV 槓桿 ROE v… BY 藍夜**」。

- **沒有這行**：代表腳本沒有執行，九成是第 2 步的「允許使用者指令碼」沒開，換電腦或換瀏覽器時特別容易漏掉。另外也確認 Tampermonkey 裡本腳本是啟用狀態。
- **有這行但沒有標籤**：確認下方交易面板已連接 **Gate** 帳戶、目前圖表是有持倉的幣種，而且網址是 `tradingview.com/chart/...`（TradingView 桌面版 App 無法使用）。

> 主控台裡大量的 `ERR_BLOCKED_BY_CLIENT` 是廣告封鎖擴充功能擋掉 TradingView 的追蹤統計，和本腳本無關，可以忽略。

**標籤邊緣露出一點原生標籤？**
請到 [Issues](https://github.com/vito20051124/TV_ROE-/issues) 回報，並附上截圖和瀏覽器縮放比例。

## 隱私

- 腳本只在你自己的瀏覽器中執行，**不會收集或上傳任何帳戶資料**。
- 唯一的對外連線是 Gate 公開行情 API（`api.gateio.ws`），只用來查詢合約的最高槓桿和標記價格，不需要也不會使用你的帳號或 API 金鑰。

---

<p align="center">BY 藍夜</p>
