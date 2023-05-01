<?php
    function payment($montant, $phone){
        $payment = '
            <form action="VOTRE CALLBACK_URL" method="POST">
                <script async src="https://www.wecashup.cloud/live/2-form/js/MobileMoney.js" class="wecashup_button"
                data-receiver-uid="VOTRE_IDENTIFIANT_MARCHAND"
                data-receiver-public-key="VOTRE_CLE_PUBLIQUE_MARCHAND"
                data-transaction-receiver-total-amount="'.$montant.'"
                data-transaction-receiver-currency="EUR"
                data-name="Windows-237"
                data-transaction-receiver-reference="REFERENCE_DE_LA_TRANSACTION_CHEZ_LE_MARCHAND"
                data-transaction-sender-reference="REFERENCE_DE_LA_TRANSACTION_CHEZ_LE_CLIENT"
                data-style="1"
                data-image="https://www.wecashup.cloud/live/2-form/img/home.png"
                data-cash="true"
                data-telecom="true"
                data-m-wallet="false"
                data-split="false"
                data-sender-lang="fr"
                data-sender-phonenumber="'.$phone.'">

                </script>
            </form>
        ';

        return $payment;
    }
?>