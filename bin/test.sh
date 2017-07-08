#!/usr/bin/env bash

#          |\__.__/|
#          )       (
#         =\       /=          .
#     |     )=====(       *          '
#    |     /       \             *        *
#   |     / dombili \       +                 '*
#  *      \        /
#  _/\_/\_/\_,  ,_/_/\_/\_/\_/\_/\_/\_/\_/\_/\_
#            )  )   This project is a part of the
#           (  (   “Byte-Sized JavaScript” videocasts.
#           )  )  Watch “Byte-Sized JavaScript” at: https://bytesized.tv/
#          (__(  MIT licensed — See LICENSE.md
#               Send your comments, suggestions, and feedback to me@volkan.io
#

npm run lint

if [ $? != 0 ]; then
    echo "Lints failed. — Exiting."

    exit 1
fi

echo "The best testing environment is production."

if [ $? != 0 ]; then
    echo "Test failed. — Exiting."

    exit 1
fi

echo "Everything is awesome!"

exit 0
