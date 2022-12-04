import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const currentPath = "Giới thiệu Rạp phim"
import { memo } from 'react'
document.title = "Giới thiệu Rạp phim | CGV"
const About = memo(() => {
    return (
        <Container>
            <Row>
            <h1 className="text-danger fw-bolder">{currentPath}</h1>
            </Row>
            <Row>   
            <iframe width="560" height="315" src="https://www.youtube.com/embed/e1ZSLVTZ47M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Row>
            <Row> 
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet risus sed elit convallis pellentesque sed finibus quam. Donec eleifend finibus ligula, sed malesuada enim elementum vitae. Vestibulum in massa fringilla, lacinia lacus non, eleifend tortor. Nunc mollis quam in nisi efficitur, eu congue urna interdum. Praesent tempor elit nunc, sit amet egestas risus eleifend vel. Ut at felis volutpat, mattis lectus in, laoreet ex. Fusce tempor dolor in lectus tristique, at feugiat arcu consectetur. Aliquam tellus elit, euismod vitae scelerisque eu, malesuada sed dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis rutrum tellus ex, sed blandit libero efficitur nec. Suspendisse iaculis pulvinar libero, ac maximus risus ornare et. Cras in velit ac sem ullamcorper vulputate.</p>
                <p>Pellentesque consequat luctus sem a feugiat. Nam in efficitur urna. Morbi consequat enim non nisi consectetur, vitae pulvinar enim sodales. Curabitur vel aliquet nisi. Proin non ligula aliquam, facilisis mi eu, porttitor nisi. Pellentesque varius augue vitae purus auctor facilisis. Nam ornare turpis nulla, in porta purus finibus in. Donec ultricies ligula vel ex elementum dignissim. Vivamus id auctor dui. Donec sed urna sed sapien auctor interdum. Phasellus tristique et libero at semper.</p>
                <p>Donec eleifend est ac gravida lobortis. Integer eget ex eu urna laoreet elementum. Mauris porta vestibulum volutpat. Quisque aliquet egestas lectus. Etiam faucibus nisi quis urna placerat efficitur. Duis et ultricies neque. Suspendisse id urna id est malesuada gravida in porttitor lectus. Praesent magna risus, tincidunt non blandit ac, luctus ut urna. Duis consectetur urna nec nisi lobortis viverra. In aliquet justo sodales velit suscipit semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent iaculis ultrices elit, eget condimentum sapien bibendum vel. Proin et augue sapien. Suspendisse quis arcu nisi. Fusce quis interdum diam. In consectetur nec ligula nec placerat.</p>
                <p>Maecenas vitae lacus neque. Suspendisse felis arcu, pellentesque consequat nibh ac, luctus egestas leo. Sed blandit vitae risus gravida hendrerit. Donec at accumsan erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis tristique vehicula ultricies. Morbi congue facilisis dolor, vel congue nibh convallis non. Donec viverra consequat sapien et eleifend.</p>
                <p>Cras lobortis rutrum mauris, eu posuere urna molestie sit amet. Aenean venenatis feugiat orci ac maximus. Cras euismod congue dui non pellentesque. Etiam sed fringilla odio. Fusce pellentesque odio nisi, sed mattis purus sagittis nec. In quis elit erat. Donec neque tellus, lobortis ac molestie in, fermentum vel mauris. Nulla feugiat, mauris sit amet volutpat luctus, nisl libero dictum erat, vitae vestibulum turpis enim sed ligula. Nunc feugiat justo vel elit elementum, accumsan rhoncus dolor placerat. Mauris venenatis libero id pretium ultricies. Phasellus et mi vitae mauris egestas gravida a nec turpis.</p>
            </Row>
        </Container>
    )
})

export default About