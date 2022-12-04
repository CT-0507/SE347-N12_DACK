import Container from 'react-bootstrap/Container';
import { memo } from 'react'

const currentPath = "CHÍNH SÁCH THANH TOÁN"
const PaymentPolicy = memo(() => {
    document.title = "CHÍNH SÁCH THANH TOÁN | CGV"
    return (
        <Container>
            <header className='text-center'>
                <h1 className="text-danger fw-bolder">{currentPath}</h1>
            </header>
            <strong>1. Quy định về thanh toán:</strong>
            <br />
            <p className="my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas justo sapien, dapibus in accumsan non, faucibus non enim. Sed sit amet scelerisque elit. Maecenas efficitur felis velit, vel porta libero finibus non. Pellentesque ultrices enim et massa cursus, in posuere mauris lobortis. Nulla nunc libero, venenatis sit amet sapien sit amet, lacinia ornare libero. Nam vitae magna vitae sapien bibendum pharetra lacinia accumsan enim. Donec non est sem. Morbi nunc ex, ullamcorper sed bibendum nec, fermentum non eros. Vestibulum urna leo, ullamcorper scelerisque arcu ac, dictum ultricies quam. Maecenas rutrum sodales libero eu sollicitudin. Morbi ac odio vulputate, pretium eros vel, finibus risus. Duis rutrum dui id dolor varius vehicula.</p>
            <strong>2. Chi tiết các hình thức thanh toán:</strong>
            <p className="my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quam quam, elementum non porttitor in, ullamcorper eget turpis. Nam accumsan, massa fermentum maximus fermentum, nunc arcu imperdiet arcu, eget pellentesque nibh ipsum vel diam. Duis scelerisque volutpat lacus sed finibus. Vestibulum sed arcu nec urna iaculis interdum. Etiam ac scelerisque nunc. Ut vel semper tellus, in tempus justo. Aliquam molestie felis vel sem eleifend, eget vulputate libero vehicula. Integer id nulla nec justo aliquam lacinia. Duis id mi a dolor vehicula facilisis. Donec rutrum non leo at imperdiet. Curabitur ut enim in leo ornare tristique. Sed cursus malesuada quam, a tempor massa mollis quis. Etiam in tortor nec ligula interdum semper.</p>
            <br />
            <strong>3. Danh sách các thẻ được chấp thuận thanh toán:</strong>
            <p className="my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id pellentesque justo, sit amet volutpat ante. Nam non mi sed dolor sagittis mollis. Donec sollicitudin turpis vel ex hendrerit malesuada. Praesent aliquam lectus ut nisi pretium, ut tristique ligula tempor. Duis urna magna, vulputate eget velit sed, convallis placerat mi. Etiam iaculis risus ut enim efficitur tristique. Donec ut iaculis magna, ut pulvinar quam. Sed ornare mi at metus egestas vulputate. Quisque porttitor vestibulum sapien in viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                <br />
                Fusce vestibulum, enim ac congue scelerisque, tortor sapien tincidunt lacus, ut fringilla metus mi eget augue. Curabitur semper justo eget mauris tincidunt volutpat. Cras suscipit mi at elit vestibulum pellentesque. Quisque molestie dignissim laoreet. Sed a volutpat lacus. Aenean consequat est ac quam venenatis vestibulum. Etiam finibus semper risus, nec luctus purus interdum non. Nulla facilisi. Mauris rhoncus id lorem non posuere. Phasellus mi dui, ornare id commodo viverra, gravida ut tellus.</p>
            <br />
            <strong>4. Trường hợp giao dịch thanh toán không thành công:</strong>
            <p className="my-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut ante vitae tortor tristique egestas non sit amet mi. Curabitur purus turpis, interdum id tortor sed, suscipit molestie enim. In bibendum turpis nunc, vel vulputate dolor vulputate et. Phasellus turpis nisi, bibendum rutrum lorem sed, pretium maximus nulla. Aliquam tincidunt ipsum at tempus volutpat. Vivamus tincidunt eros lorem, at accumsan dui pharetra vehicula. Etiam ligula neque, tempor vel tincidunt sed, condimentum sed neque. Aenean lectus dui, pretium id nisi ut, commodo sollicitudin purus. Fusce ornare sagittis tortor, sit amet cursus ex gravida eu. Vivamus a velit magna. Phasellus a eros sapien. Nunc lectus dolor, consequat id tincidunt sed, vestibulum at libero. Pellentesque eleifend ante a orci luctus, id sagittis felis tincidunt. Quisque sed rhoncus sapien. Mauris in odio justo.
            </p>
            
        </Container>
    )
})

export default PaymentPolicy