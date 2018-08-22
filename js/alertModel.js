
    class AlertModel {
        constructor (modelId){

        }
        render (title,message,buttonArr,modelId){
            if(typeof buttonArr =='string'){
                var footerHtml = ` <div class="alert-footer">
                                        <!--<button class="alert-cancel btn" type="button">${buttonArr[0]}</button>-->
                                        <button class="btn-default btn" type="button">${buttonArr}</button>
                                    </div>`
            }else if(buttonArr instanceof Array){
                    var buttonHtml ="";
                    for(let i =0;i<buttonArr.length;i++){
                        buttonHtml+= `<button class="btn-default btn" type="button">${buttonArr[i]}</button>`
                    }
                    var footerHtml = ` <div class="alert-footer"> ${buttonHtml}</div>`

            }else if(buttonArr==undefined){
                var footerHtml = ` <div class="alert-footer">
                                       <button class="btn-default btn" type="button">取消</button>
                                        <button class="btn-default btn" type="button">确认</button>
                                    </div>`
            }
            var html = ` <div class="alert-model none" id="${modelId}">
                            <div class="alert-mask"></div>
                            <div class="alert-container">
                                <div class="alert-title">${title}</div>
                                <div class="alert-content">${message}</div>
                                ${footerHtml}
                            </div>
                        </div>`;
            $('body').append(html);
            this.bind (modelId);
        }
        showAlert (clickElemId){

            $('#'+clickElemId).on('click',function(){

                let selector = $(this).attr('data-target');

                $('#'+selector).removeClass('none')
            })
        }

        bind (modelId){
            $('#'+modelId).on('click','button',function(){
                $('#'+modelId).addClass('none');
            })
        }

    }





