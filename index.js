'use strict';

const scampi = {};
const specialToEntity = {'&': '&amp;', '"': '&quot;', "'": '&#39;', '<': '&lt;', '>': '&gt;'};
const entityToSpecial = {'&amp;': '&', '&quot;': '"', '&#39;': "'", '&lt;': '<', '&gt;': '>'};


/**
 * @description Escape a given html string
 * @param       {String}      html
 * @returns     {String}
 */
scampi.escape = function (html)
{
    let chars = html.split(''),
        idx = 0,
        len = chars.length;

    for (; idx < len; idx += 1)
    {
        if (specialToEntity.hasOwnProperty(chars[idx]))
        {
            chars[idx] = specialToEntity[chars[idx]];
        }
    }

    return chars.join('');
};


/**
 * @description Unescape a given html string
 * @param       {String}    html
 * @returns     {String}
 */
scampi.unescape = function (html)
{
    let temp = html,
        key,
        reg;

    for (key in entityToSpecial)
    {
        reg = new RegExp(key, 'g');
        temp = temp.replace(reg, entityToSpecial[key]);
    }

    return temp;
};


/**
 * Export
 */
module.exports = scampi;
