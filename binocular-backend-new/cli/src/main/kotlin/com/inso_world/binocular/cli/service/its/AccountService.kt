package com.inso_world.binocular.cli.service.its

import com.inso_world.binocular.core.service.AccountInfrastructurePort
import com.inso_world.binocular.model.Account
import jakarta.validation.Valid
import org.springframework.stereotype.Service
import org.slf4j.LoggerFactory
import reactor.core.publisher.Mono
import reactor.core.scheduler.Schedulers

@Service
class AccountService (
    private val accountInfrastructurePort: AccountInfrastructurePort
) {
    private val logger =  LoggerFactory.getLogger(AccountService::class.java)

    fun saveAll(accounts: List<Account>): Mono<List<Account>> {
        logger.trace("Saving ${accounts.size} accounts")
        return Mono.fromCallable {
            accountInfrastructurePort.saveAll(accounts).toList()
        }.subscribeOn(Schedulers.boundedElastic())
    }
}
