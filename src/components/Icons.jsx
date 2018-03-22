import React from 'react';
import '../../sass/components/_icons.scss';
import Add from '../../sass/icons/chart settings/zoom-in/ic-zoomin-light.svg';
import AddThin from '../../sass/icons/add/ic-add.svg';
import Candle from '../../sass/icons/chart settings/chart types/candle/ic-candle-normal.svg';
import Close from '../../sass/icons/close/ic-close.svg';
import Comparison from '../../sass/icons/chart settings/comparison/ic-comparison-normal.svg';
import Crosshair from '../../sass/icons/chart settings/crosshair/ic-crosshair.svg';
import Delete from '../../sass/icons/delete/ic-delete.svg';
import Dot from '../../sass/icons/chart settings/chart types/dot/ic-dot-normal.svg';
import Download from '../../sass/icons/download/ic-download.svg';
import Draw from '../../sass/icons/chart settings/drawing tools/ic-drawingtools-normal.svg';
import HollowCandle from '../../sass/icons/chart settings/chart types/hollow candle/ic-hollowcandle-normal.svg';
import Indicator from '../../sass/icons/chart settings/indicators/ic-indicator-normal.svg';
import Line from '../../sass/icons/chart settings/chart types/line/ic-line-normal.svg';
import List from '../../sass/icons/template-list/ic-templatelist.svg';
import Measure from '../../sass/icons/measure/ic-measure.svg';
import Minus from '../../sass/icons/chart settings/zoom-out/ic-zoomout-light.svg';
import OHLC from '../../sass/icons/chart settings/chart types/ohlc/ic-ohlc-normal.svg';
import Spline from '../../sass/icons/chart settings/chart types/spline/ic-spline-normal.svg';
import Star from '../../sass/icons/favorite/ic-favorite-normal.svg';
import Template from '../../sass/icons/chart settings/chart template/ic-charttemplate-normal.svg';
import Tick from '../../sass/icons/tick/ic-tick.svg';
import Warning from '../../sass/icons/alert message/warning.svg';
import Active from '../../sass/icons/sidebar/active/ic-active-normal.svg';
import Commodities from '../../sass/icons/sidebar/commodities/ic-commodities-normal.svg';
import Favorite from '../../sass/icons/favorite/ic-favorite-normal.svg';
import FavoriteCategory from '../../sass/icons/sidebar/favorite/ic-favorite-normal.svg';
import Forex from '../../sass/icons/sidebar/forex/ic-forex-normal.svg';
import Indices from '../../sass/icons/sidebar/indices/ic-indices-normal.svg';
import Stocks from '../../sass/icons/sidebar/otc/ic-otc-normal.svg';
import Volidx from '../../sass/icons/sidebar/volatility/ic-volatility-normal.svg';
import Search from '../../sass/icons/search/ic-search-normal.svg';
import Edit from '../../sass/icons/edit/ic-edit.svg';
import IndicatorCategory from '../../sass/icons/sidebar/indicator/ic-indicator-normal.svg';
import Arrow from '../../sass/icons/dropdown/ic-dropdown.svg';
import Copy from '../../sass/icons/share/ic-copy.svg';
import Share from '../../sass/icons/share/ic-share.svg';

import SymbolPlaceholder from '../../sass/icons/placeholder/ic-placeholder.svg';
import AUD from '../../sass/icons/flags/aud.svg';
import CAD from '../../sass/icons/flags/cad.svg';
import CHF from '../../sass/icons/flags/chf.svg';
import EUR from '../../sass/icons/flags/eur.svg';
import GBP from '../../sass/icons/flags/gbp.svg';
import JPY from '../../sass/icons/flags/jpy.svg';
import MXN from '../../sass/icons/flags/mxn.svg';
import NOK from '../../sass/icons/flags/nok.svg';
import NZD from '../../sass/icons/flags/nzd.svg';
import PLN from '../../sass/icons/flags/pln.svg';
import SEK from '../../sass/icons/flags/sek.svg';
import USD from '../../sass/icons/flags/usd.svg';
import Belgium from '../../sass/icons/flags/belgium.svg';
import HongKong from '../../sass/icons/flags/hong kong.svg';
import Singapore from '../../sass/icons/flags/singapore.svg';
import Bombay from '../../sass/icons/flags/bombay.svg';
import Jakarta from '../../sass/icons/flags/jakarta.svg';
import German from '../../sass/icons/flags/german.svg';
import Dubai from '../../sass/icons/flags/dubai.svg';
import Ireland from '../../sass/icons/flags/ireland.svg';
import French from '../../sass/icons/flags/french.svg';
import Dutch from '../../sass/icons/flags/dutch.svg';
import SouthAfrica from '../../sass/icons/flags/south africa.svg';

const Wrapper = WrappedComponent => props => {
    let { className, ['tooltip-title']: tooltip, ...p } = props;
    className = `ic-icon ${className ? className : ''} ${tooltip ? 'tooltip' : ''}`;

    return (
        <span
            className={className}
            tooltip-title={tooltip}
            {...p}>
            <WrappedComponent />
        </span>
    );
};

export const AddIcon = Wrapper(Add);
export const AddThinIcon = Wrapper(AddThin);
export const CandleIcon = Wrapper(Candle);
export const CloseIcon = Wrapper(Close);
export const ComparisonIcon = Wrapper(Comparison);
export const CrosshairIcon = Wrapper(Crosshair);
export const DeleteIcon= Wrapper(Delete);
export const DotIcon = Wrapper(Dot);
export const DownloadIcon = Wrapper(Download);
export const DrawIcon = Wrapper(Draw);
export const HollowCandleIcon = Wrapper(HollowCandle);
export const IndicatorIcon = Wrapper(Indicator);
export const LineIcon = Wrapper(Line);
export const ListIcon = Wrapper(List);
export const MeasureIcon = Wrapper(Measure);
export const MinusIcon = Wrapper(Minus);
export const OHLCIcon = Wrapper(OHLC);
export const SplineIcon = Wrapper(Spline);
export const StarIcon = Wrapper(Star);
export const TemplateIcon = Wrapper(Template);
export const TickIcon = Wrapper(Tick);
export const WarningIcon = Wrapper(Warning);
export const SearchIcon = Wrapper(Search);
export const EditIcon = Wrapper(Edit);
export const ArrowIcon = Wrapper(Arrow);
export const FavoriteIcon = Wrapper(Favorite);
export const CopyIcon = Wrapper(Copy);
export const ShareIcon = Wrapper(Share);

export const SymbolPlaceholderIcon = Wrapper(SymbolPlaceholder);

export const CategoryIconMap = {
    active: Wrapper(Active),
    commodities: Wrapper(Commodities),
    favorite: Wrapper(FavoriteCategory),
    forex: Wrapper(Forex),
    indices: Wrapper(Indices),
    stocks: Wrapper(Stocks),
    volidx: Wrapper(Volidx),
    indicators: Wrapper(IndicatorCategory)
};

const FlagIconMap = {
    AUD: Wrapper(AUD),
    CAD: Wrapper(CAD),
    CHF: Wrapper(CHF),
    EUR: Wrapper(EUR),
    GBP: Wrapper(GBP),
    JPY: Wrapper(JPY),
    MXN: Wrapper(MXN),
    NOK: Wrapper(NOK),
    NZD: Wrapper(NZD),
    PLN: Wrapper(PLN),
    SEK: Wrapper(SEK),
    USD: Wrapper(USD),
    BOMBAY: Wrapper(Bombay),
    Dubai: Wrapper(Dubai),
    HongKong: Wrapper(HongKong),
    Jakarta: Wrapper(Jakarta),
    Singapore: Wrapper(Singapore),
    Belgium: Wrapper(Belgium),
    Dutch: Wrapper(Dutch),
    German: Wrapper(German),
    French: Wrapper(French),
    Ireland: Wrapper(Ireland),
    SouthAfrica: Wrapper(SouthAfrica),
};

export const ItemIconMap = {
    SPC: FlagIconMap.USD,
    AS51: FlagIconMap.AUD,
    BSESENSEX30: FlagIconMap.BOMBAY,
    HSI: FlagIconMap.HongKong,
    JCI: FlagIconMap.Jakarta,
    STI: FlagIconMap.Singapore,
    N225: FlagIconMap.JPY,
    BFX: FlagIconMap.Belgium,
    AEX: FlagIconMap.Dutch,
    DFMGI: FlagIconMap.Dubai,
    FCHI: FlagIconMap.French,
    OBX: FlagIconMap.NOK,
    SSMI: FlagIconMap.CHF,
    GDAXI: FlagIconMap.German,
    ISEQ: FlagIconMap.Ireland,
    TOP40: FlagIconMap.SouthAfrica,
};

function frx(a, b) {
    const A = FlagIconMap[a];
    const B = FlagIconMap[b];
    ItemIconMap[`frx${a}${b}`] = props => {
        const className = `ic-frx ic-frx${a}${b}`;
        return (
            <span className={className} {...props}><A/><B/></span>
        );
    };
}

/* FOREX */
/* Major Pairs */
frx('AUD', 'JPY');
frx('AUD', 'USD');
frx('EUR', 'AUD');
frx('EUR', 'CHF');
frx('EUR', 'JPY');
frx('EUR', 'CAD');
frx('EUR', 'GBP');
frx('EUR', 'USD');
frx('GBP', 'AUD');
frx('GBP', 'JPY');
frx('GBP', 'USD');
frx('USD', 'CAD');
frx('USD', 'CHF');
frx('USD', 'JPY');
/* Minor Pairs */
frx('AUD', 'CAD');
frx('AUD', 'CHF');
frx('AUD', 'NZD');
frx('AUD', 'PLN');
frx('EUR', 'NZD');
frx('GBP', 'CAD');
frx('GBP', 'CHF');
frx('GBP', 'NOK');
frx('GBP', 'NZD');
frx('GBP', 'PLN');
frx('NZD', 'JPY');
frx('NZD', 'USD');
frx('USD', 'MXN');
frx('USD', 'NOK');
frx('USD', 'PLN');
frx('USD', 'SEK');

export const ActiveOptionsIconMap = {
    delete: DeleteIcon,
    edit: EditIcon,
};
