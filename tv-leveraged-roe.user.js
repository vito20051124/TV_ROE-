// ==UserScript==
// @name         TV 槓桿 ROE
// @namespace    lanye.tv-leveraged-roe
// @version      1.0.4
// @description  將 TradingView 圖表上的 Gate 持倉標籤改為顯示槓桿倍數與含槓桿收益率（ROE%），並遮蔽帳戶資訊，適合直播使用。BY 藍夜
// @author       藍夜
// @homepageURL  https://github.com/vito20051124/TV_ROE-
// @supportURL   https://github.com/vito20051124/TV_ROE-/issues
// @updateURL    https://raw.githubusercontent.com/vito20051124/TV_ROE-/main/tv-leveraged-roe.user.js
// @downloadURL  https://raw.githubusercontent.com/vito20051124/TV_ROE-/main/tv-leveraged-roe.user.js
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAJQElEQVR4nOSbC1BU1xnH/2d3WZbdBXlIWAiInTYGHyjEF2BVMsUoaKx5NNUq6DSYtrZJbCdNrRofaTRO6iTtZKam9dmp0USnZnxB1EbFB9DaxljqxEcjz2ERCCiPfbG7J+csgqx3l727e5eXP2aXu985d2e/737fOd/5zr0KiEClS59JQLJlhKZTQh4FRQwh0GIAQSnaQHCbUFpjp6SUEhSY9MXnPJ1H3DdlKjQ6Sy4ldD0hJBGDEEppJTPI+vY61YfAWaurPq4MQELi0hfKgI3s8DEMDW7Y7fY3jHWlB9kx7dkgMIBalzGXELoPhIRhKEFpC/PmXENt6ZGeYicDhMSmPcti/SBzeRmGICwk7Ey37Pba4pNdsm4DKGPSkxVy/JMZIAQDCPajXcqZIvDxC1tgs81or//XFf6x60rLgmT4aKAoT/kf7VSeK/rgy9GH0u6XV/DQliv24p7ujjd1bNpLrGEM+pkuhQj/I+6vsrMxyD1jQTwE4zS6tLzOw+gxWo0i/BY/Qn/CNfDVrXE/VMSGButfYdA3JMk08rDn+1P5UaNGIT4+3i/lOT1DQ2T/keq46GwZlZFM9DHxCfHIX74c+/bvx7Tp30VNTQ2kwGsjUJbtsbeR8M/4ogkPD8eL+fl4ev58KNiUc+bMWezeuQtSwo3QPZZ49qoUBeulQ4AJDlbihwsXYfGSJdBo1A5Zc3Mz3t60CYGgywgiOuoUzGF0CKALyGQy5Ocvx6LFP3KS79i+HQaDAYHCYQR40oxyA5BhCBBqtRpvb9mCiZMmOsnLy8tx9MhRBBweCvemVNeQYQFNefOWLhUozzly+DDY4gSBpnMM6D0UFAgQOXNzsCR3icu2zy9fhj/Io9SIyB4F9dhHmAauryHhcuYB7Zf1uPPpTVgb2l32C4gBNBoNXnn1VbftVZWV8IfhL4xD1AJxiatmbAwU4SrUvV/qsj0gIZCblwet1nXBqLW1FR2WDviDelyMV/1Dpya4bZPcAAqFAtk52W7b6/R18BfD1dte9Scquds2yUNg4sSJiIqKctuuDfW/lNh4oAy2VgvUY+6PAcrYUARFa+716FxQdUGt7gdCyQ0wfcaMXtsjI6PgL7ZGIxr/9kX3Z92KqdCO75nPPTDv9eLnkofA2LFje23nWWGQMghSwZWP/P5o+IrkBtDFxnrsk5qaCilwp7z1rglikdQAfOQPFRHjnsJEDO6UN33VhJZzFRCLpAYQc/U5WVmz2FgQCV/pTfmK1wrZoCc+y5TUAHV6vah+3EsWu8kSPeFJebvBuxxDUgO0tbXBYraI6rtgwTOIi4uDN0TnpbpU3vj/r1Hx+qfdypur7zq1Wyrvuv1OyQdBbgQx8Nlg3Yb1jv9i0E6Jx/BF4wVyfuUrf82Ub7tv+NbiKpgqmmE3W2Gpb8Odghtuv5do4jK8rCv3zoaNG5E1K0t0/6KiIqxdvabXAoZ6gg4j35kjkPMr71C+h9vzBTAoEV1ilNwDzp8/71X/mTNn4k/btmHYMNc7ccGPRSFh4/cEcuPNRlT+5oRzzHOtvSwuS26AkuJidHR4NxAlj0/Gjl27MGXqFCe58tEwJG6eBXmIc+LUwZa21es+63Z7OasvZkzLYF5k93rHSHID8DLX8WPH4S2xbAp997338MFf/uwooigf0SLx93OgCFM59bO2mByjvbXJCJVKxeoOc/HxgYOwWW1O+b9YJB8DOLz6+/HBA466gC+0URPeaj2EJuJcxLAbrdDuqkLSsES26HoCKSmpjrT6/Lnz+O2qVfCFgBiAk52TgzVr18BbTNSCdwxHUWNvcpLLmbO+pp6Hb8udawFNTU1YmpvnqDL7QsBqgoUFBSg8XuDVOVZqwx8MhQLluWv/LGSWQHleV1z/xjqflecEtCi6detWlN+6JaqvnQ1g24yncMteL2h7UZWJ8YoRAvme3Xtw2c/6ouQGkEeGIGL+aGjTE2A2m7Fy5S9RVlbm8by/ms+hzFYtkL+gSsOUoO8I5B/u3YtdO3fCXyQdA7jS8aszIVN2lqAs+lbU7/4PDBdrsHrNajw1e7bL8z4yFeN0x1WBfI4yBc8GT3aS8Sl286bNOHXyJKRAMgNEPP04Yn+R7rLN8GU96j64hMnRSfjpihVITLzvzoWWL/CJ+ZLgnOlBSchVTe/+zDPF05+dxo4d21FdVQ2pkMQA0ctSEb1ogsd+d4vKcXvnvzF78pOYN28eWkcHY4+pSNAvVTESP1FlQcaSGhMLowtsmtvPdpKvX7sGqfHbALG/moaI2d7dTdf496uwsBVb3MoMQVsYK/iOKeoMoUq2f3CBpdZ8LAkUPhuABMsRvzYToVOENXfj9UbHasxbwxiuNaDy9ROgZiv6Cp+qwrJQJUa8NQvqJOGNJW2XalD9uzNMCRuaDl2F7udp0Iz3vANvqr6DqrWn+lR5jtceoIjRYMSmp6BKEG4qN5+4Cf27FwXysMxvISZ/Uo+6vTOW220oX3kcNpbf9zVeGSA4MRyJW2ZDESm8m65h/xU07HGflPCQGb5wAqKeH8OmyfuOxxc35S8fQ0eduEKK1Ig2gDo5BglvZkGuFtb0a98vwZ1j18V8DYJ0WsS8NBlh0xLR/t866P9YDEtNC/oLUQbgCU7C2ic7t5x7YLfYULP5LNpKpJuX+xqPg2DE3MehezlNUGiwtVtQteYUjF82YDDTqwEif5AMXb7wDg9rsxGVq07CXOH7KmygoGD+b2bXNvjBBkesLhNuYfGSc+WqE7A2Bu4Gp76D3pWxJNvlhr0iIkQQ88YbjSh/5dgQUZ5D6riGLg3AY5sr3EVLSZVPOy8DGnbx5UGhCZPYADfJVTvfYOCbC40H/oev911hI19Aqmf9yWGiiU2fw4b4QjyE2G22dD63ydVx6ZdY3U2aTftBAvPlK4ba4if4GGBjrzfx0EE3sDd7d3bDvODzh8UL7l39FH7cPc+xjZWlbGOx75djfQ2lLVYbze362G0Ay+2SMlZ3W8IfLcMQhetmI/Q5rmuXzCnTMepLD4HQZxyPlg01uE6UzDfVlv6jp9jlbqIyLj0piOITNj0mYShAcdVKyHPm2ouCNbvLjRFLbcm1dn1wMtt7WsYfQMYgxfHb7fhxu16Z4kp5jqj9ZFVsxgxCkTNYHp+nIBeojRYY60uKPZ33DQAAAP//15Vu7wAAAAZJREFUAwBBuHpyNVx68gAAAABJRU5ErkJggg==
// @match        https://*.tradingview.com/chart/*
// @run-at       document-idle
// @noframes
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  const CFG = {
    leverageMode: 'actual',
    maskAccountPanel: true,
    autoSize: true,
    fallbackRightOffset: 73,
    fallbackWidth: 84,
    fallbackQtyWidth: 34,
    labelHeight: 21,
  };

  console.info('%cTV 槓桿 ROE v1.0.4 BY 藍夜', 'color:#2962ff;font-weight:bold');

  const num = s => parseFloat(String(s == null ? '' : s).replace(/−/g, '-').replace(/[^0-9.\-]/g, ''));

  const toContract = name => {
    const m = String(name).replace(/\.P$/i, '').match(/^(.+?)USDT$/i);
    return m ? m[1].toUpperCase() + '_USDT' : null;
  };

  const gate = new Map();
  let wanted = new Set();
  let gateBusy = false;

  async function fetchContract(c) {
    try {
      const r = await fetch('https://api.gateio.ws/api/v4/futures/usdt/contracts/' + c, {
        cache: 'no-store',
        signal: AbortSignal.timeout(4000),
      });
      if (!r.ok) return;
      const j = await r.json();
      gate.set(c, {
        levMax: num(j.leverage_max),
        mark: num(j.mark_price),
        mult: num(j.quanto_multiplier),
        takerFee: num(j.taker_fee_rate),
        t: Date.now(),
      });
    } catch (e) {}
  }

  async function pollGate() {
    if (gateBusy || !wanted.size) return;
    gateBusy = true;
    try {
      await Promise.all([...wanted].map(fetchContract));
    } finally {
      gateBusy = false;
    }
  }
  setInterval(pollGate, 1000);

  let state = [];
  let refreshBusy = false;

  async function refresh() {
    if (refreshBusy) return;
    refreshBusy = true;
    try {
      const trading = await TradingViewApi._tradingService.trading();
      const broker = trading ? await trading.activeBroker() : null;
      const list = broker ? await broker.positions() : [];
      const contracts = new Set();
      const next = [];
      for (const p of list || []) {
        if (!/^GATE:/i.test(String(p.symbol))) continue;
        if (!(Math.abs(num(p.qty)) > 0)) continue;
        const c = toContract(p.symbolDisplayName || String(p.symbol).split(':').pop());
        if (c) contracts.add(c);
        const g = c ? gate.get(c) : null;
        const fresh = !!g && Date.now() - g.t < 5000;
        const ex = p.extra || {};
        const actualLev = num(ex.leverage);
        const maxLev = g && g.levMax > 0 ? g.levMax : NaN;
        const lev = CFG.leverageMode === 'max'
          ? (maxLev > 0 ? maxLev : actualLev)
          : (actualLev > 0 ? actualLev : maxLev);
        const mark = fresh && g.mark > 0 ? g.mark : num(ex.markPrice);
        const avg = num(p.avgPrice);
        if (!(avg > 0) || !(mark > 0) || !(lev > 0)) continue;
        const isLong = p.side === 1 || p.side === 'buy';
        const qty = Math.abs(num(p.qty));
        const mult = g && g.mult > 0 ? g.mult : NaN;
        const im = num(ex.initialMargin);
        const upl = num(p.unrealizedPl);
        const useActualMargin = im > 0 && lev === actualLev;
        let roe;
        if (qty > 0 && mult > 0) {
          const value = mark * qty * mult;
          const pnl = (isLong ? mark - avg : avg - mark) * qty * mult;
          const margin = useActualMargin ? im : value / lev + value * (g.takerFee > 0 ? g.takerFee : 0);
          roe = pnl / margin * 100;
        } else if (useActualMargin && isFinite(upl)) {
          roe = upl / im * 100;
        } else {
          roe = (isLong ? mark - avg : avg - mark) / avg * lev * 100;
        }
        if (!isFinite(roe)) continue;
        next.push({ symbol: p.symbol, isLong, avg, lev, roe });
      }
      wanted = contracts;
      state = next;
    } catch (e) {
      state = [];
    } finally {
      refreshBusy = false;
    }
  }
  setInterval(refresh, 300);

  function scanNativeLabel(canvas, y, paneRight) {
    try {
      const bb = canvas.getBoundingClientRect();
      const k = canvas.width / bb.width;
      const ctx = canvas.getContext('2d');
      if (!ctx) return null;
      const xa = Math.max(0, Math.floor((paneRight - 260 - bb.left) * k));
      const xb = Math.min(canvas.width, Math.floor((paneRight - bb.left) * k));
      const w = xb - xa;
      if (w <= 20) return null;
      const r = Math.round((y + 7 - bb.top) * k);
      if (r < 0 || r >= canvas.height) return null;
      const mid = ctx.getImageData(xa, r, w, 1).data;
      const col = x => (mid[x * 4] << 16) | (mid[x * 4 + 1] << 8) | mid[x * 4 + 2];
      const rgb = x => 'rgb(' + mid[x * 4] + ',' + mid[x * 4 + 1] + ',' + mid[x * 4 + 2] + ')';

      const probe = Math.floor((paneRight - CFG.fallbackRightOffset - 12 - bb.left) * k) - xa;
      if (probe < 0 || probe >= w) return null;
      const cp = col(probe);
      let l2 = probe;
      let r2 = probe;
      while (l2 - 1 >= 0 && col(l2 - 1) === cp) l2--;
      while (r2 + 1 < w && col(r2 + 1) === cp) r2++;
      const pctW = (r2 - l2 + 1) / k;
      if (pctW < 24 || pctW > 140) return null;

      const maxSkip = Math.round(10 * k);
      const minFill = Math.round(12 * k);
      const maxQty = Math.round(64 * k);
      const runLeft = (x, c) => {
        let n = 1;
        while (n < maxQty && x - n >= 0 && col(x - n) === c) n++;
        return n;
      };
      let qx = -1;
      let qRun = 0;
      for (let x = l2 - 1; x >= 0 && l2 - x <= maxSkip; x--) {
        const c = col(x);
        if (c === cp) continue;
        const n = runLeft(x, c);
        if (n >= minFill) {
          qx = x;
          qRun = n;
          break;
        }
      }
      if (qx < 0) return null;
      const l1 = qx - qRun + 1;

      const left = bb.left + (xa + l1) / k - 2;
      const right = bb.left + (xa + r2 + 1) / k + 2.5;
      const width = right - left;
      if (width < 40 || width > 220) return null;
      const pctLeft = bb.left + (xa + l2) / k;
      return {
        rel: paneRight - right,
        width,
        qtyW: Math.max(20, pctLeft - left),
        qtyBg: rgb(qx),
        pctBg: rgb(probe),
      };
    } catch (e) {
      return null;
    }
  }

  const root = document.createElement('div');
  root.style.cssText = 'position:fixed;left:0;top:0;width:0;height:0;z-index:50;pointer-events:none';
  document.body.appendChild(root);

  const mask = document.createElement('div');
  mask.style.cssText = 'position:fixed;z-index:60;background:#131722;color:#787b86;display:none;' +
    'align-items:center;justify-content:center;font:12px sans-serif;pointer-events:auto';
  mask.textContent = '帳戶資訊已隱藏（Alt+P 切換）';
  document.body.appendChild(mask);

  let maskOn = CFG.maskAccountPanel;
  addEventListener('keydown', e => {
    if (e.altKey && (e.key === 'p' || e.key === 'P')) {
      maskOn = !maskOn;
      e.preventDefault();
    }
  });

  const labels = new Map();

  function getLabel(key) {
    let o = labels.get(key);
    if (!o) {
      const el = document.createElement('div');
      el.style.cssText = 'position:fixed;left:0;top:0;display:none;border-radius:3px;overflow:hidden;' +
        'font:bold 12px/1 -apple-system,"Trebuchet MS",Roboto,sans-serif;white-space:nowrap;box-sizing:border-box';
      const lev = document.createElement('div');
      const pct = document.createElement('div');
      const cell = 'display:flex;align-items:center;justify-content:center;height:100%;box-sizing:border-box';
      lev.style.cssText = cell + ';color:#fff';
      pct.style.cssText = cell + ';flex:1';
      el.appendChild(lev);
      el.appendChild(pct);
      root.appendChild(el);
      o = { el, lev, pct, box: null, scanT: 0 };
      labels.set(key, o);
    }
    return o;
  }

  function chartSymbol() {
    try {
      return TradingViewApi.activeChart().symbol();
    } catch (e) {
      return '';
    }
  }

  function priceToRatio() {
    try {
      const ps = TradingViewApi.activeChart().getPanes()[0].getMainSourcePriceScale();
      const r = ps.getVisiblePriceRange();
      if (!r || !(r.to > r.from)) return null;
      const mode = typeof ps.getMode === 'function' ? ps.getMode() : 0;
      if (mode === 0) return price => (r.to - price) / (r.to - r.from);
      if (mode === 1 && r.from > 0) {
        const a = Math.log(r.to);
        const b = Math.log(r.from);
        return price => (price > 0 ? (a - Math.log(price)) / (a - b) : NaN);
      }
      return null;
    } catch (e) {
      return null;
    }
  }

  function render() {
    const bottom = document.querySelector('.layout__area--bottom');
    if (maskOn && bottom) {
      const b = bottom.getBoundingClientRect();
      Object.assign(mask.style, {
        display: 'flex',
        left: b.left + 'px',
        top: b.top + 'px',
        width: b.width + 'px',
        height: b.height + 'px',
      });
    } else {
      mask.style.display = 'none';
    }

    const used = new Set();
    const toRatio = state.length ? priceToRatio() : null;
    const pane = toRatio ? document.querySelector('[data-name="pane-canvas"]') : null;
    if (toRatio && pane) {
      const p = pane.getBoundingClientRect();
      const canvas = pane.parentElement && pane.parentElement.querySelector('canvas');
      const sym = chartSymbol();
      const now = performance.now();
      for (const pos of state) {
        if (sym && pos.symbol !== sym) continue;
        const ratio = toRatio(pos.avg);
        if (!isFinite(ratio)) continue;
        const y = p.top + ratio * p.height;
        const key = pos.symbol + '|' + (pos.isLong ? 'L' : 'S') + '|' + pos.avg;
        const o = getLabel(key);
        const el = o.el;
        used.add(key);
        if (y < p.top + 12 || y > p.bottom - 12) {
          el.style.display = 'none';
          continue;
        }

        if (CFG.autoSize && canvas && now - o.scanT > 120) {
          o.scanT = now;
          const box = scanNativeLabel(canvas, y, p.right);
          if (box) o.box = box;
        }
        const rel = o.box ? o.box.rel : CFG.fallbackRightOffset;
        const width = Math.round(o.box ? o.box.width : CFG.fallbackWidth);
        const posColor = pos.isLong ? '#089981' : '#f23645';
        const qtyBg = o.box ? o.box.qtyBg : posColor;
        const pctBg = o.box ? o.box.pctBg : '#000';
        const qtyW = Math.round(o.box ? o.box.qtyW : CFG.fallbackQtyWidth);
        const sign = pos.roe >= 0 ? '+' : '';

        o.lev.textContent = pos.lev + 'x';
        o.pct.textContent = sign + pos.roe.toFixed(2) + '%';
        o.lev.style.width = qtyW + 'px';
        o.lev.style.background = qtyBg;
        o.pct.style.background = pctBg;
        o.pct.style.boxShadow = 'inset 0 0 0 1px ' + qtyBg;
        o.pct.style.color = pos.roe >= 0 ? '#2ebd85' : '#f6465d';
        Object.assign(el.style, {
          display: 'flex',
          width: width + 'px',
          height: CFG.labelHeight + 'px',
          transform: 'translate(' + (p.right - rel - width) + 'px,' + (y - CFG.labelHeight / 2) + 'px)',
        });
      }
    }
    for (const [k, o] of labels) {
      if (!used.has(k)) {
        o.el.remove();
        labels.delete(k);
      }
    }
  }

  (function loop() {
    try {
      render();
    } catch (e) {}
    requestAnimationFrame(loop);
  })();

  setInterval(() => {
    if (document.hidden) {
      try {
        render();
      } catch (e) {}
    }
  }, 250);
})();
