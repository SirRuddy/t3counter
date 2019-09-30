<?php
/**
 * This file is part of the "counter" Extension for TYPO3 CMS.
 *
 * For the full copyright and license information, please read the
 * LICENSE file that was distributed with this source code.
 */

namespace Lavitto\Counter\Hooks\PageLayoutView;

use Lavitto\Counter\Utility\FlexFormUtility;
use TYPO3\CMS\Backend\Utility\BackendUtility;
use TYPO3\CMS\Backend\View\PageLayoutView;
use TYPO3\CMS\Backend\View\PageLayoutViewDrawItemHookInterface;
use TYPO3\CMS\Extbase\Utility\LocalizationUtility;

/**
 * Class CounterPreviewRenderer
 *
 * @package Lavitto\Counter\Hooks\PageLayoutView
 */
class CounterPreviewRenderer implements PageLayoutViewDrawItemHookInterface
{

    /**
     * Preprocesses the preview rendering of a content element of type "counter_counter"
     *
     * @param PageLayoutView $parentObject Calling parent object
     * @param bool $drawItem Whether to draw the item using the default functionality
     * @param string $headerContent Header content
     * @param string $itemContent Item content
     * @param array $row Record row of tt_content
     */
    public function preProcess(
        PageLayoutView &$parentObject,
        &$drawItem,
        &$headerContent,
        &$itemContent,
        array &$row
    ): void {
        if ($row['CType'] === 'counter_counter') {
            $flexFormContent = $row['pi_flexform'] ?? null;
            if ($flexFormContent !== null) {
                $flexFormArray = FlexFormUtility::getFlexFormService()->convertFlexFormContentToArray($flexFormContent);
                $start = (int)$flexFormArray['start'];
                $end = (int)$flexFormArray['end'];
                $label = BackendUtility::getLabelFromItemListMerged($row['pid'], 'tt_content', 'CType',
                    $row['CType']);
                $itemContent = '';
                if ($label) {
                    $itemContent .= LocalizationUtility::translate($label);
                }
                $itemContent .= ' (' . $start . '-' . $end . ')';
                $itemContent = $parentObject->linkEditContent('<strong>' . $itemContent . '</strong>', $row);
                $drawItem = false;
            }
        }
    }
}
