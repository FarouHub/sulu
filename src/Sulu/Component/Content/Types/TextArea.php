<?php

/*
 * This file is part of Sulu.
 *
 * (c) Sulu GmbH
 *
 * This source file is subject to the MIT license that is bundled
 * with this source code in the file LICENSE.
 */

namespace Sulu\Component\Content\Types;

use Sulu\Component\Content\SimpleContentType;

/**
 * ContentType for TextArea.
 */
class TextArea extends SimpleContentType
{
    public function __construct()
    {
        parent::__construct('TextArea', '');
    }
}
