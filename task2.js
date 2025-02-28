function ipv4Parser(ip, mask) {
    function toBinary(ip) {
        return ip.split('.').map(num => parseInt(num).toString(2).padStart(8, '0')).join('');
    }
    function toDottedDecimal(binary) {
        let parts = [];
        for (let i = 0; i < 4; i++) {
            parts.push(parseInt(binary.slice(i * 8, i * 8 + 8), 2));
        }
        return parts.join('.');
    }
    const ipBinary = toBinary(ip);
    const maskBinary = toBinary(mask);
    let networkBlockBinary = '';
    for (let i = 0; i < 32; i++) {
        networkBlockBinary += ipBinary[i] & maskBinary[i];
    }
    const networkBlock = toDottedDecimal(networkBlockBinary);
    let hostIdentifierBinary = '';
    for (let i = 0; i < 32; i++) {
        hostIdentifierBinary += ipBinary[i] ^ networkBlockBinary[i];
    }
    const hostIdentifier = toDottedDecimal(hostIdentifierBinary);

    return [networkBlock, hostIdentifier];
}
